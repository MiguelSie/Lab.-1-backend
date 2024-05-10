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

async function updatePedido(datos, idUsuario) {
    const { _id, estado } = datos;
    const pedidoAct = await updatePedidoMongo(_id, estado, idUsuario);
    return pedidoAct;
}

async function deletePedido(id, idUsuario) {
    const pedidoElim = await deletePedidoMongo(id, idUsuario);
    return pedidoElim;
}

module.exports = {
    readPedidoConFiltros,
    readPedidoPorId,
    createPedido,
    updatePedido,
    deletePedido
}