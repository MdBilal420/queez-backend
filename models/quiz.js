const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuizSchema = new Schema({
    question: String,
    options: Array,
    answer: Number,
});

const MovieQuiz = mongoose.model("Movie", QuizSchema);
const MarvelQuiz = mongoose.model("Marvel", QuizSchema);
const SportsQuiz = mongoose.model("Sports", QuizSchema);

module.exports = { MovieQuiz, MarvelQuiz, SportsQuiz };