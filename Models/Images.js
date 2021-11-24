const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    name: { type: String },
    description: { type: String },
    mode: { type: String },
    celltype: { type: String },
    component: { type: String },
    doi: { type: String },
    organism: { type: String },
});

module.exports = image = mongoose.model("image", imagesSchema);
