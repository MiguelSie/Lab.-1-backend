const mongoose = require("mongoose");

const schemaLibro = new mongoose.Schema({
    genero: {type: String, required: true},
    publicacion: {type: Date, required: true}, 
    editorial: {type: String, required: true}, 
    autor: {type: String, required: true}, 
    nombre: {type: String, required: true},
    // Añadir campo de id del creador
    borrado: {type: Date, default: null}
  }, {
    versionKey: false,
    timestamps: true,
});
  
const Model = mongoose.model('Libro', schemaLibro);

module.exports = Model;