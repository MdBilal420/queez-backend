const express = require("express");
const { MovieQuiz, MarvelQuiz, SportsQuiz } = require('../models/quiz');

const router = express.Router();


router.get("/movie", async (req, res) => {
    const result = await MovieQuiz.find();
    res.json({ questionlist: result });
});


router.get("/marvel", async (req, res) => {
    const result = await MarvelQuiz.find();
    res.json({ questionlist: result });
});


router.get("/sports", async (req, res) => {
    const result = await SportsQuiz.find();
    res.json({ questionlist: result });
});

module.exports = router;