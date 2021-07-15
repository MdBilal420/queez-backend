const express = require("express");
const { Score } = require("../models/score");
const auth = require("../middleware/auth")

const router = express.Router();


router.post("/addScore", async (req, res) => {
    const score = req.body;
    const newScore = Score(score);
    await newScore.save();
    res.json({ success: true, newScore });
})

router.get("/getAllScores", async (req, res) => {
    const allScores = await Score.find();
    res.json(allScores);
})


router.get("/getUserScore", auth, async (req, res) => {
    const { user } = req;
    const userScores = await Score.find({ username: user.username });
    res.json(userScores);
})

module.exports = router