const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI =
    "mongodb+srv://yosra:yosra123@quiz.kkywa.mongodb.net/quiz?retryWrites=true&w=majority";

const connectDB = () =>
    mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("connected to DB"))
        .catch((err) => console.log(err));

module.exports = connectDB;
