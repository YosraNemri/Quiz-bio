const express = require("express");
const app = express();
const connectDB = require("./config/connectDB.js");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

connectDB();
var userRoutes = require("./routes/user.js");

app.use("/api/users/", userRoutes);

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running on port: ${PORT}`);
});
