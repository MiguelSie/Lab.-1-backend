const { createPedidoMongo, getPedidoMongo, updatePedidoMongo, deletePedidoMongo, getPedidoIdMongo } = require("./pedido.actions");

async function readPedidoConFiltros(query, id) {
    const resultadosBusqueda = await getPedidoMongo(query, id);
    return resultadosBusqueda;
}

async function readPedidoPorId(id, idUsuario) {
    const pedido = await getPedidoIdMongo(id, idUsuario);
    return pedido;
}

async function createPedido(id, datos) {
    const { idBooks } = datos;
    const pedidoCreado = await createPedidoMongo(id, idBooks);
    return pedidoCreado;
}

module.exports = {
    readPedidoConFiltros,
    readPedidoPorId,
    createPedido,

}