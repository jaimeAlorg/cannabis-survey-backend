const { formModel, testModel } = require("../models/formModel");

const postTest = async (req, res) => {
    const { test, prueba } = req.body;
    console.log(test, prueba);

    try {
        const newTest = testModel({ test, prueba });
        savedTest = await newTest.save();
        console.log(savedTest);
        res.json(newTest);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//module.exports = { postTest };

/*
const getFormData = async (req, res) => {
    try {
        const data = await formModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
*/

const postFormData = async (req, res) => {
    //Get the data from the http request
    const { date, price, quantity, city, source, reason } = req.body;
    //Create Post From

    const newPostForm = new formModel({
        date,
        price,
        quantity,
        city,
        source,
        reason,
    });

    try {
        //Save the from data
        const savedSurvey = await newPostForm.save();
        //res.status(201).json(newPostForm);
        res.json(savedSurvey);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = { postTest, postFormData };
