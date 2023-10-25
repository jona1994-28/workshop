require('dotenv').config();
//requerimos el modulo mysql2
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,   //si quiero esperar una conexion
    connectionLimit: 10, // limite de las conexiones 
    queueLimit: 0, //limite de la cola de espera, 0 es ilimitado
})

module.exports = {
    conectar: pool.promise(),   //maneja el resultado de una tarea asincrona una vez que se haya completado o haya encontrado un error
}