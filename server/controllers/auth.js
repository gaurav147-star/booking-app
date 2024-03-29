import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
// dotenv.config();
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return next(createError(404, "Username already exist"));
    }
    const useremail = await User.findOne({ email: req.body.email });
    if (useremail) {
      return next(createError(405, "Email already exist"));
    }
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    // res.cookie("jwt", token, {
    //   // httpOnly: true,
    //   path: "/",
    // });
    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong password and username"));
    } else {
      res.status(200).json({ details: { ...otherDetails }, isAdmin, token });
    }
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  // Set token to none and expire after 1 seconds
  res.cookie("jwt", "none", {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true,
  });
  res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
};
