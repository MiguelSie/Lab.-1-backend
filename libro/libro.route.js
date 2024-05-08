const express = require('express')
const router = express.Router();
const { readLibroConFiltros, readLibroPorId, createLibro, updateLibro, deleteLibro } = require("./libro.controller");
const { respondWithError } = require('../utils/functions');

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

// Recuerda añadir que se necesita el id del usuario que crea el libro
async function PostLibro(req, res) {
    try {
        // llamada a controlador con los datos
        await createLibro(req.body);

        res.status(200).json({
            mensaje: "Exito. 👍"
        })
    } catch(e) {
        res.status(500).json({error: e});
    }
}


async function PatchLibros(req, res) {
    try {
        // llamada a controlador con los datos
        updateLibro(req.body);

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
        deleteLibro(req.params.id);

        res.status(200).json({
            mensaje: "Exito. 👍"
        })
    } catch(e) {
        res.status(500).json({error: e});
    }
}

router.get("/:id", GetLibro);
router.get("/", GetLibros);
router.post("/", PostLibro);
router.patch("/", PatchLibros);
router.delete("/:id", DeleteLibros);


module.exports = router;