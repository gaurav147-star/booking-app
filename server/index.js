import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        throw error;
    }
}

app.get("/", (req, res) => {
    res.send("hello first request");
})
app.use(cookieParser());
app.use(express.json());
//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

app.listen(8080, () => {
    connect()
    console.log("Connected to backend");
})