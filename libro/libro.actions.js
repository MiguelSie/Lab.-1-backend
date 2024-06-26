const Libro = require("./libro.model")

async function getLibroMongo(filtros) {
    const cantidadLibros = await Libro.countDocuments({...filtros, borrado: null});
    const librosFiltrados = await Libro.find({...filtros, borrado: null});

    return {
        resultados: librosFiltrados,
        cantidadLibros: cantidadLibros
    };
}

async function getLibroIdMongo(id) {
    const libro = await Libro.findOne({_id: id});
    return libro;

}

async function createLibroMongo(id, datos) {
    const libroCreado = await Libro.create({...datos, idUsuario: id});
    return libroCreado;
}

async function updateLibroMongo(id, cambios, idUsuario) {
    const resultado = await Libro.findOneAndUpdate({_id: id, borrado: null, idUsuario: idUsuario}, cambios, {new: true});
    if (!resultado) {
        throw new Error("No se pudo modificar el libro.")
    }
    return resultado
}

async function deleteLibroMongo(id, idUsuario) {
    const update = { borrado: Date.now() };
    const resultado = await Libro.findOneAndUpdate({_id : id, borrado: null, idUsuario: idUsuario}, update, {new: true,});
    if (!resultado) {
        throw new Error("No se pudo eliminar el libro.")
    }
    return resultado;
}

module.exports = {
    createLibroMongo,
    getLibroIdMongo,
    getLibroMongo,
    updateLibroMongo,
    deleteLibroMongo
};