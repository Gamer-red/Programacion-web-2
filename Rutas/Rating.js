const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    res.json({message:'Insertar una calificacion'})
})

router.get('/',(req,res)=>{
    res.json({message:'Obtener todas las calificaciones'})
})