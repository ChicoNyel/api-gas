const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

