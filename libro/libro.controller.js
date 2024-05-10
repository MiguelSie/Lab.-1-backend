const { createLibroMongo, getLibroMongo, updateLibroMongo, deleteLibroMongo, getLibroIdMongo } = require("./libro.actions");

async function readLibroConFiltros(query) {
    // const { genero, publicacion, editorial, autor, nombre } = query;

    // hacer llamado a base de datos con el filtro de tipo

    const resultadosBusqueda = await getLibroMongo(query);

    return resultadosBusqueda;
}

async function readLibroPorId(id) {
    // hacer llamado a base de datos con el filtro de tipo
    const libro = await getLibroIdMongo(id);
    return libro;
}

async function createLibro(id, datos) {
    // const { genero, publicacion, editorial, autor, nombre } = datos;

    //if (coccion !== "Frito" && coccion !== "Horneado") {
    //    throwCustomError(501, "Coccion invalida.");
    //}

    //const productoSimilar = await getProductoMongo({masa});

    // hacer llamado a base de datos con el filtro de tipo

    const libroCreado = await createLibroMongo(id, datos);
    return libroCreado;
}


async function updateLibro(datos, idUsuario) {
    const { _id, ...cambios } = datos;

    // hacer llamado a base de datos con el filtro de tipo
    const libroAct = await updateLibroMongo(_id, cambios, idUsuario);
    return libroAct;
}

async function deleteLibro(id, idUsuario) {

    // hacer llamado a base de datos con el filtro de tipo
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