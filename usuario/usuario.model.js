const mongoose = require("mongoose");

const schemaUsuario = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    usuario: {type: String, required: true},
    pwd: {type: String, required: true},
    
    creacion: {type: Date, default: Date.now},
    actualizacion: {type: Date, default: Date.now},
    borrado: {type: Date, default: null}
  }, {
    versionKey: false,
});
  
const Model = mongoose.model('Usuario', schemaUsuario);

module.exports = Model;