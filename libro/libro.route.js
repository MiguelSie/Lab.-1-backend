const express = require('express')
const router = express.Router();
const { readLibroConFiltros, readLibroPorId, createLibro, updateLibro, deleteLibro } = require("./libro.controller");
const authenticateToken = require('../utils/authToken');

async function GetLibros(req, res) {
    try {
        // llamada a controlador con los filtros
        const resultadosBusqueda = await readLibroConFiltros(req.query);
        if (resultadosBusqueda.resultados.length === 0) {
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

async function GetLibro(req, res) {
    try {
        const libro = await readLibroPorId(req.params.id);
        res.status(200).json(libro)
    } catch(e) {
        res.status(500).json({msg: ""});
    }
}


async function PostLibro(req, res) {
    try {
        // llamada a controlador con los datos
        await createLibro(req.usuario._id, req.body);

        res.status(200).json({
            mensaje: "Exito. 👍"
        })
    } catch(e) {
        res.status(500).json({error: e});
    }
}

// Validar que si no se modificó (ej: estaba borrado) avise que no se pudo modificar
async function PatchLibros(req, res) {
    try {
        // llamada a controlador con los datos
        updateLibro(req.body, req.usuario._id);
        res.status(200).json({
            mensaje: "Exito. 👍" 
        })
    } catch(e) {
        res.status(500).json({error: e});
    }
}


async function DeleteLibros(req, res) {
    try {
        // llamada a controlador con los datos
        deleteLibro(req.params.id, req.usuario._id);
        res.status(200).json({
            mensaje: "Exito. 👍"
        })
    } catch(e) {
        res.status(500).json({error: e});
    }
}

router.get("/:id", GetLibro);
router.get("/", GetLibros);
router.post("/", authenticateToken, PostLibro);
router.patch("/", authenticateToken, PatchLibros);
router.delete("/:id", authenticateToken, DeleteLibros);


module.exports = router;