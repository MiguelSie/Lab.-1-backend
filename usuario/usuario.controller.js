const { createUsuarioMongo, loginUsuarioMongo, getUsuarioIdMongo, updateUsuarioMongo, deleteUsuarioMongo } = require("./usuario.actions");
const bcrypt = require("bcrypt");

async function createUsuario(datos) {
    const { nombre, apellido, usuario, pwd } = datos;
    const salt = await bcrypt.genSaltSync();
    const hash = await bcrypt.hash(pwd, salt);
    const usuarioCreado = await createUsuarioMongo(nombre, apellido, usuario, hash);
    return usuarioCreado;
}

async function loginUsuario(datos) {
    const { usuario, pwd } = datos;
    const usuarioEncontrado = await loginUsuarioMongo(usuario);
    if (await bcrypt.compare(pwd, usuarioEncontrado.pwd)) {
        return usuarioEncontrado;
    } else {
        throw new Error("Usuario o contraseña incorrectos");
    
    }
}

async function readUsuarioPorId(id) {
    // hacer llamado a base de datos con el filtro de tipo
    const usuario = getUsuarioIdMongo(id);
    return usuario;
}

async function updateUsuario(datos, idUsuario) {
    // hacer llamado a base de datos con el filtro de tipo
    const usuarioAct = updateUsuarioMongo(datos, idUsuario);
    return usuarioAct;
}

async function deleteUsuario(id) {

    // hacer llamado a base de datos con el filtro de tipo
    const usuarioElim = deleteUsuarioMongo(id);
    return usuarioElim;
}

module.exports = {
    createUsuario,
    loginUsuario,
    readUsuarioPorId,
    updateUsuario,
    deleteUsuario
};