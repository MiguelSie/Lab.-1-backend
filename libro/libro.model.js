const mongoose = require("mongoose");

const schemaLibro = new mongoose.Schema({
    genero: {type: String},
    publicacion: {type: Date, required: true}, //Podría no ser required?
    editorial: {type: String}, 
    autor: {type: String, required: true}, //Podría no ser required?
    nombre: {type: String, required: true},
  }, {
    versionKey: false,
    timestamps: true
});
  
const Model = mongoose.model('Libro', schemaLibro);

module.exports = Model;