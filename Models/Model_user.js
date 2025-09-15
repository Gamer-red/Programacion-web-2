const { type } = require('express/lib/response');
const mongoose = require('mongoose');
//Definir el esquema del usuario
const userSchema = new mongoose.Schema({
    Nombre_usuario:{
        require: true,
        unique: true
    },
    Correo: {
        type: String,
        require: true,
        unique: true
    },
    Contrasenia:{
        type:String,
        required: true
    },
    Sexo:{
        type: String,
        require: true
    },
    Rol:{
        type: String,
        require: true
    },
    Telefono:{
        type: String,
        require: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    juegosPublicados: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Games'
    }],
    Comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    Rating:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    Order:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
});
module.exports = mongoose.model('User', userSchema);