const { formModel, testModel } = require("../models/formModel");

const getFormData = async (req, res) => {
    try {
        const data = await formModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const postFormData = async (req, res) => {
    //Get the data from the http request
    const {
        fecha,
        precio,
        derivado,
        calidad,
        cantidad,
        comunidad,
        provincia,
        proveedor,
        motivo,
        frecuencia,
        genero,
    } = req.body;
    //Create Post From

    const newPostForm = new formModel({
        fecha,
        precio,
        cantidad,
        derivado,
        calidad,
        comunidad,
        provincia,
        proveedor,
        motivo,
        frecuencia,
        genero,
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

module.exports = { getFormData, postFormData };
