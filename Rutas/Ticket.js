const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    res.json({message:'Insertar un nuevo ticket'})
})

router.get('/',(req,res)=>{
    res.json({message:'Ver todos los tickets'})
})