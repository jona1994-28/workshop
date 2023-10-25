const model = require("../models/user");

const findAll = async () => {
    return model.findAll();  //devuelve una promesa
};

const findOne = async (params) => {
    const rows = await model.findOne(params);  //devuelve una promesa
    if(rows.length > 0) {
        return rows[0];
    }
    return 'No existe el registro';
};
//Una funcion que recibe un dato (el cuerpo de la peticion con el body), va a llamar al modelo que va a tener una funcion store que es la que va a guardar en la base de datos.
const store = async (body) => {
   const result= await model.store(body);

   if (result.affectedRows == 1) {  //en esta condicion si se afecta mas de una fila el registro fue creado
    return "Registro creado";
   }

   return result;
};

module.exports = {
    findAll,
    findOne,
    store,
};