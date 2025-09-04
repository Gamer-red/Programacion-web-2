const express = require('express');
const router = express.Router();

// GET /api/User

router.post('/',(req,res)=>{
    res.json({message:'Registrar un usuario'})
})

router.post('/',(req,res)=>{
    res.json({message:'Iniciar sesion'})
})

router.get('/',(req,res)=>{
    res.json({message:'Obtener informacion del usuario'})
})

router.put('/',(req,res)=>{
    res.json({message:'Actualizar informacion del usuario'})
})