const { conectar } = require('../config/conectar');

//creo las funciones que me permitan trabajar con la base de datos y con el modelo

const findAll = async () => { //buscar todos los registros de usuarios de la base de datos
    try {
        const [rows] = await conectar.query('SELECT * FROM users'); //la consulta devuelve un array con los elementos(rows y los campos de la base de datos) await esperamos a que se resuelva la promesaasync 
        return rows;
    } catch (error) {
        throw error;
    } finally {
            conectar.releaseConnection();   //debemos liberar la conexión siempre, es decir, tenemos que usarlos e ir liberandolos.                                                
    }
}

const findOne = async (params) => { //buscar todos los registros de usuarios de la base de datos
    const { id } = params;
    try {
        const [rows] = await conectar.query('SELECT * FROM users WHERE ?', { id }); //la consulta devuelve un array con los elementos(rows y los campos de la base de datos) await esperamos a que se resuelva la promesaasync 
        return rows;
    } catch (error) {
        throw error;
    } finally {
            conectar.releaseConnection();   //debemos liberar la conexión siempre, es decir, tenemos que usarlos e ir liberandolos.                                                
    }
}

const store = async (params) => { //buscar todos los registros de usuarios de la base de datos
    const { email, password } = params;
    try {
        //[
            //[],       A ese elemento sacalo de ahi y llamalo rows
           // [],
        //]
        const [result] = await conectar.query("INSERT INTO users SET ?", {  //El comando SET se usa con ACTUALIZAR para especificar qué columnas y valores deben actualizarse en una tabla .
            email, 
            password,
         });
        return result;
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {        //condicion por si ingreso un registro que esta duplicado 
            return "Registro duplicado";
        }
        throw error;
    } finally {
            conectar.releaseConnection();   //debemos liberar la conexión siempre, es decir, tenemos que usarlos e ir liberandolos.                                                
    }
}

module.exports = {
    findAll,
    findOne,
    store,
};







