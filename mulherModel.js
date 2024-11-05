const mongoose = require('mongoose')

const MulheresSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('diva', MulheresSchema)