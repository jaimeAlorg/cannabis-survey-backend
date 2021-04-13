const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    fecha: { type: Date, default: Date.now, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    derivado: { type: String, required: true },
    calidad: { type: String, required: true },
    comunidad: { type: String, required: true },
    provincia: { type: String, required: true },
    proveedor: { type: String, required: true },
    motivo: { type: String, required: true },
    frecuencia: { type: String },
    genero: { type: String },
});

const formModel = mongoose.model("formModel", formSchema);

module.exports = { formModel };
