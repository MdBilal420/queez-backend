const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuizSchema = new Schema({
    username: String,
    genre: String,
    score: Number,
});

const Score = mongoose.model("Score", QuizSchema);

module.exports = { Score };