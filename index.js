//Importar Express
const express = require ('express');
const mongoose = require('mongoose');
// Crear una instancia de la aplicacion expreess
const app = express();
const port = 3000;

//Middleware para parsear JSON en las solicitudes
app.use(express.json());
// Conectar a MongoDB y luego iniciar el servidor
mongoose.connect('mongodb://localhost:27017/gamecommerce')
  .then(() => {
    console.log('Se conectó a la base de datos ✅');

    // Ahora que la DB está conectada, iniciamos el servidor
    app.listen(port, () => {
      console.log(`🚀 Servidor Express escuchando en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('❌ Error de conexión a MongoDB:', err);
  });