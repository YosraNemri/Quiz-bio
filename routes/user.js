const router = require("express").Router();
const User = require("../Models/User");
const Answer = require("../Models/Answer");
const Images = require("../Models/Images");
const Questions = require("../Models/Question");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRETKEY = "123abc";
// const { extractToken } = require("../Middlewares/VerifyToken");
require("dotenv").config();

// registration
// @route   POST api/users/register
// @desc    this route is for registering the user
// @access  Public
router.post("/register", (req, res) => {
    const { userName, email, password } = req.body;
    // verifying if the email already exists in the DB
    User.findOne({ email: email }).then((user) => {
        if (user) {
            res.status(409).json({ msg: "email already exists" });
        } else {
            const newUser = new User({
                userName,
                email,
                password,
            });
            bcrypt.genSalt(10, function (err, salt) {
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, (err, cryptedPassword) => {
                    if (err) throw err;
                    newUser.password = cryptedPassword;
                    newUser.save((err) => {
                        if (err) throw err;
                    });
                    res.status(200).json({
                        status: 200,
                        msg: "user registered successfully",
                        user: newUser,
                    });
                });
            });
        }
    });
});

// login
// @route   POST api/users/login
// @desc    this route is for the user sign in
// @access  Public
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                bcrypt.compare(
                    password,
                    user.password,
                    (err, passwordMatch) => {
                        if (err) throw err;
                        if (passwordMatch === true) {
                            jwt.sign({ user }, SECRETKEY, (err, token) => {
                                if (err) throw err;
                                res.status(200).json({
                                    status: 200,
                                    msg: "logged in successfully",
                                    token: token,
                                });
                            });
                        } else {
                            res.status(400).json({
                                status: 400,
                                msg: "wrong password",
                            });
                        }
                    }
                );
            } else {
                res.status(400).json({
                    status: 400,
                    msg: "email doesn't exist",
                });
            }
        })
        .catch((err) => console.log(err));
});
// Get Info
// @route   POST api/users/info
// @desc    this route is for getting user info
// @access  Public
router.post("/info", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        res.status(200).json({
            status: true,
            message: "user Imported Successfully",
            user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "there's problem with getting info",
            err,
        });
    }
});
// Get Answer Table
// @route   POST api/users/answers
// @desc    this route is for getting answers
// @access  Public
router.get("/answers", async (req, res) => {
    try {
        const answers = await Answer.find({});
        res.status(200).json({
            status: true,
            message: "answers imported successfully",
            answers,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
// images Table
// @route   POST api/users/images
// @desc    this route is for getting images
// @access  Public
router.get("/images", async (req, res) => {
    try {
        const images = await Images.find({});
        res.status(200).json({
            status: true,
            message: "Images imported successfully",
            images,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
// questions
// @route   GET api/users/questions
// @desc    this route is for getting question
// @access  Public
router.get("/questions", async (req, res) => {
    try {
        const questions = await Questions.find({});
        res.status(200).json({
            status: true,
            message: "Questions imported successfully",
            questions,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});
// score
// @route   PUT api/users/score
// @desc    this route is for post score
// @access  Private
router.put("/score", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, {
            ...req.body,
        });
        res.status(200).json({
            status: true,
            message: "Score updated",
            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

// score
// @route   PUT api/users/score
// @desc    this route is for post score
// @access  Private
router.put("/score/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, {
            ...req.body,
        });
        res.status(200).json({
            status: true,
            message: "Score updated",
            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
});

module.exports = router;
