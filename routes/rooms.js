import express from "express";

const router = express.Router();


router.get("/rooms", (req, res) => {
    res.send("Hello,roomjs");
})


export default router