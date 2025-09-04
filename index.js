//Importar Express
const express = require ('express');

// Crear una instancia de la aplicacion expreess
const app = express();
const port = 3000;

//Middleware para parsear JSON en las solicitudes
app.use(express.json());

//3. Definir una ruta basica (Endpoint)
app.get('/Login',(req, res)=>{
    res.send('Pantalla de Inicio Sesion')
});

app.get('/Registro', (req, res) => {
  res.send( 'Pantalla para el registro');
});

//4. Iniciar el servidor
app.listen(port,()=>{
    console.log('Servidor Express escuchando en http://localhost:${port}')
});