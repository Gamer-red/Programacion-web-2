const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:'Mostrar informacion del carrito'})
})

router.delete('/',(req,res)=>{
    res.json({message:'Vaciar el carrito'})
})

router.put('/',(req,res)=>{
    res.json({message:'Editar el carrito'})
})

router.post('/',(req,res)=>{
    res.json({message:'Agregar juego al carrito'})
})