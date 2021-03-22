const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    date: { type: Date, default: Date.now, required: true },
    price: Number,
    quantity: Number,
    city: String,
    source: String,
    reason: String,
});

const testSchema = mongoose.Schema({
    test: String,
    prueba: String,
});

const formModel = mongoose.model("formModel", formSchema);
const testModel = mongoose.model("testModel", testSchema);

module.exports = { formModel, testModel };
