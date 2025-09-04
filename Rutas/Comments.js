const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    res.json({message:'Insertar un nuevo comentarios'})
})

router.get('/',(req,res)=>{
    res.json({message:'Obtener todos los comentarios'})
})