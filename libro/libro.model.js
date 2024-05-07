const mongoose = require("mongoose");

const schemaLibro = new mongoose.Schema({
    genero: {type: String},
    publicacion: {type: Date, required: true}, //Podría no ser required?
    editorial: {type: String}, 
    autor: {type: String, required: true}, //Podría no ser required?
    nombre: {type: String, required: true},
    creacion: {type: Date, default: Date.now},
    actualizacion: {type: Date, default: Date.now},
    borrado: {type: Date, default: null}
  }, {
    versionKey: false,
});
  
const Model = mongoose.model('Libro', schemaLibro);

module.exports = Model;