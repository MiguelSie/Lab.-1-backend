const { throwCustomError } = require("../utils/functions");
const { createLibroMongo, getLibroMongo, updateLibroMongo, deleteLibroMongo } = require("./libro.actions");

async function readLibroConFiltros(query) {
    const { genero, publicacion, editorial, autor, nombre } = query;

    // hacer llamado a base de datos con el filtro de tipo
    const resultadosBusqueda = await getLibroMongo(query);

    return resultadosBusqueda;
}

async function createLibro(datos) {
    const { genero, publicacion, editorial, autor, nombre } = datos;

    //if (coccion !== "Frito" && coccion !== "Horneado") {
    //    throwCustomError(501, "Coccion invalida.");
    //}

    //const productoSimilar = await getProductoMongo({masa});

    // hacer llamado a base de datos con el filtro de tipo
    const libroCreado = await createLibroMongo(datos);

    return libroCreado;
}


function updateLibro(datos) {
    const { _id, ...cambios } = datos;

    // hacer llamado a base de datos con el filtro de tipo
    const libroAct = updateLibroMongo(_id, cambios);

    return libroAct;
}

function deleteLibro(id) {

    // hacer llamado a base de datos con el filtro de tipo
    const libroElim = deleteLibroMongo(id);

    return libroElim;
}

module.exports = {
    readLibroConFiltros,
    createLibro,
    updateLibro,
    deleteLibro
}