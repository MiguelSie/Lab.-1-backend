const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({});
})



const rutasLibro = require("./libro/libro.route")
app.use('/libro', rutasLibro);

const rutasUsuario = require("./usuario/usuario.route")
app.use('/usuario', rutasUsuario);

// aqui va la connection string VVVVV
mongoose.connect('mongodb://localhost:27017/myapp');

app.listen(8080);

