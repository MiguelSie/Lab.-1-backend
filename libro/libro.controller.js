const { createLibroMongo, getLibroMongo, updateLibroMongo, deleteLibroMongo, getLibroIdMongo } = require("./libro.actions");

async function readLibroConFiltros(query) {

    const resultadosBusqueda = await getLibroMongo(query);

    return resultadosBusqueda;
}

async function readLibroPorId(id) {
    const libro = await getLibroIdMongo(id);
    return libro;
}

async function createLibro(id, datos) {


    const libroCreado = await createLibroMongo(id, datos);
    return libroCreado;
}


async function updateLibro(datos, idUsuario) {
    const { _id, ...cambios } = datos;

    const libroAct = await updateLibroMongo(_id, cambios, idUsuario);
    return libroAct;
}

async function deleteLibro(id, idUsuario) {

    const libroElim = await deleteLibroMongo(id, idUsuario);
    return libroElim;
}

module.exports = {
    readLibroConFiltros,
    readLibroPorId,
    createLibro,
    updateLibro,
    deleteLibro
}