import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello,userjs");
})


export default router