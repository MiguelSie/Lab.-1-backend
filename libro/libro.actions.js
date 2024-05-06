const Libro = require("./libro.model")

async function getLibroMongo(filtros) {
    const cantidadLibros = await Libro.countDocuments(filtros);
    const librosFiltrados = await Libro.find(filtros);

    return {
        resultados: librosFiltrados,
        // paginaMax: cantidadProductos / 20,
        // paginaActual: 1,
        cantidadLibros: cantidadLibros
    };
}

async function createLibroMongo(datos) {
    const libroCreado = await Libro.create(datos);

    return libroCreado;
}

async function updateLibroMongo(id, cambios) {
    const resultado = await Libro.findByIdAndUpdate(id, cambios);

    return resultado
}

async function deleteLibroMongo(id) {
    const resultado = await Libro.findByIdAndDelete(id);
    
    return resultado;
}

module.exports = {
    createLibroMongo,
    getLibroMongo,
    updateLibroMongo,
    deleteLibroMongo
};