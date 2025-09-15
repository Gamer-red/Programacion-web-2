//Importar Express
const express = require ('express');
const mongoose = require('mongoose');
// Crear una instancia de la aplicacion expreess
const app = express();
const port = 3000;

//Middleware para parsear JSON en las solicitudes
app.use(express.json());
//Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/gamecommerce').then(() => console.log('Se conecto a la base de datos'))
.catch(err => console.error('Error de conexion a mongodb', err));

//meter esa
//Iniciamos con el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${port}`);
});