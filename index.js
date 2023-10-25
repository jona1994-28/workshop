//Me lee el archivo .env y me lo transforma en variables de entorno. 
require("dotenv").config; //El paquete dotenv es una excelente manera de mantener contraseñas, claves API y otros datos confidenciales fuera de su código
const express = require("express");
const app = express();

//motor de vistas
app.set("view engine", "ejs");
//donde se almacenan
app.set('views', './src/views');

//esto se utiliza para archivos estaticos
app.use(express.static("public"));

//Cuando yo quiero recibir datos a través de un formulario.
app.use(express.urlencoded({extended: false})); //urlencoded es un middelware

app.get('/', (req, res) => {
    res.render('index', {texto: 'Hola EJS'});    //cuando utilizo el render, primero se fija que motor de vista uso y donde estan las vistas.
})


app.use('/users', require('./src/routes/userRouter')); // /users es el prefijo y lo demas es el archivo que maneja esa ruta


//o esta la variable de entorno o el valor 3000 de forma predeterminada. 
const PORT = process.env.PORT || 3000;

//Para que funcione nuestra aplicación
app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 


//nodemon es un programa de utilidad desarrollado que puede monitorear cualquier cambio en su directorio fuente y reiniciar automáticamente su servidor o aplicacione


