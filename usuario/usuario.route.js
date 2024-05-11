require('dotenv').config();
const express = require('express')
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticateToken = require('../utils/authToken');
// const { respondWithError } = require('../utils/functions');
const { readUsuarioPorId, createUsuario, updateUsuario, deleteUsuario, loginUsuario } = require("./usuario.controller");

async function postUsuario(req, res) {
    try {
        const usuarioCreado = await createUsuario(req.body);
        res.status(200).json(usuarioCreado);
    } catch(e) {
        res.status(500).json({error: e.message});
    }
}

async function login(req, res) {
    try {
        const usuario = await loginUsuario(req.body);
        const accessToken = jwt.sign({usuario: usuario.usuario, _id: usuario._id}, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({accessToken: accessToken});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
}

async function getUsuario(req, res) {
    try {
        const usuarioEncontrado = await readUsuarioPorId(req.params.id);
        res.status(200).json(usuarioEncontrado);
    } catch(e) {
        res.status(500).json({error: e.message});
    }
}

async function patchUsuario(req, res) {
    try {
        const usuarioActualizado = await updateUsuario(req.body, req.usuario._id);
        res.status(200).json(usuarioActualizado)
    } catch(e) {
        res.status(500).json({error: e.message});
    }
}

async function delUsuario(req, res) {
    try {
        await deleteUsuario(req.usuario._id);
        res.status(200).json({
            mensaje: "Exito. 👍"
        })
    } catch(e) {
        res.status(500).json({error: e.message});
    }
}

router.post("/", postUsuario);
router.post("/login", login);
router.get("/:id", authenticateToken, getUsuario);
router.patch("/", authenticateToken, patchUsuario);
router.delete("/", authenticateToken, delUsuario);

module.exports = router;