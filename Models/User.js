const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    totalPoints: {
        type: Number,
        default: 0,
    },
    microscopyPoint: {
        type: Number,
        default: 0,
    },
    componentPoints: {
        type: Number,
        default: 0,
    },
});

module.exports = User = mongoose.model("user", userSchema);
