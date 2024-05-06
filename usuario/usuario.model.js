const mongoose = require("mongoose");

const schemaUsuario = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    usuario: {type: String, required: true},
    pwd: {type: String, required: true}
  }, {
    versionKey: false,
    timestamps: true
});
  
const Model = mongoose.model('Usuario', schemaUsuario);

module.exports = Model;