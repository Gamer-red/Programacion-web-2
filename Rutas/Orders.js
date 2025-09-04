const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    res.json({message:'Agregar una nueva compra'})
})

router.get('/',(req,res)=>{
    res.json({message:'Obtener las compras del usuario'})
})