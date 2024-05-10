const express = require('express')
const router = express.Router();
const authenticateToken = require('../utils/authToken');

const { readPedidoConFiltros, readPedidoPorId, createPedido, updatePedido, deletePedido } = require("./pedido.controller");

async function GetPedidos(req, res) {
    try {
        const resultadosBusqueda = await readPedidoConFiltros(req.query, req.usuario._id);
        if (resultadosBusqueda.cPedidosBuyer === 0 && resultadosBusqueda.cPedidosSeller === 0) {
            res.status(404).json({
                mensaje: "No se encontraron resultados. 😢"
            })
        } else{
            res.status(200).json({
                ...resultadosBusqueda
            })
        }
    } catch(e) {
        res.status(500).json({msg: ""});
    }
}

async function GetPedido(req, res) {
    try {
        const pedido = await readPedidoPorId(req.params.id, req.usuario._id);
        res.status(200).json(pedido)
    } catch(e) {
        res.status(500).json({msg: ""});
    }
}

async function PostPedido(req, res) {
    try {
        const pedido = await createPedido(req.usuario._id, req.body);
        res.status(200).json(pedido)
    } catch(e) {
        res.status(500).json({error: e});
    }
}

router.get("/:id", authenticateToken, GetPedido);
router.get("/", authenticateToken, GetPedidos);
router.post("/", authenticateToken, PostPedido);
// router.patch("/", authenticateToken, PatchLibros);
// router.delete("/:id", authenticateToken, DeleteLibros);

module.exports = router;