const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:'Obtener todos los videojuegos'})
})

router.get('/',(req,res)=>{
    res.json({message:'Obtener videojuegos por id'})
})

router.post('/',(req,res)=>{
    res.json({message:'Añadir un nuevo videojuego a la venta'})
})