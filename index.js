const express = require("express");
const connectDB = require("./config/db");
const quizRouter = require('./routes/quiz')
const signupRouter = require('./routes/signup.js')
const loginRouter = require('./routes/login.js')
const scoreRouter = require('./routes/score.js')
const cors = require("cors");
const app = express();

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.json({ msg: "success" });
});


app.use("/signup", signupRouter)
app.use("/login", loginRouter)
app.use("/quiz", quizRouter)
app.use("/score", scoreRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`running on port:${PORT}`) })