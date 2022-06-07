const Alerta = require('../models/Alerta')
const User = require('../models/User')


async function findAll() {
  return await Alerta.find({});
  
}



async function create(input) {
  const { 
    nombre,
    descripcion,
    productos,
    tipoLicitaciones,
    unidadesMonetarias,
    montosEstimados,
    modalidadesPagos,
    unidadesTiempDeEvaluacion,
    unidadesTiempoDuracionContrato 
  } = input;

  console.log(input)

  // const foundEmail = await User.findOne({email: email}).exec();
  // if(foundEmail) throw new Error("Este email ya esta en uso")
  try {
    const alerta = new Alerta({
      ...input,
    });
    alerta.save();
    return alerta;
  } catch (error) {
    console.log(error) 
  }

}
//TODO Cambiar nombre de la funcion
async function agregarUsuarioEnUnaAlerta(input) {

  const { idAlerta, idUsuario } = input;
  

  try {
    await Alerta.updateOne(
      { _id: idAlerta }, 
      { $push: { idUsuarios: idUsuario } }
    );
  } catch (error) {
    console.log(error)
  }

  try {
    await User.updateOne(
      { _id: idUsuario }, 
      { $push: { alertsId: idAlerta } }
    );
  } catch (error) {
    console.log(error)
  }
  const userFound = await User.findOne({ _id: idUsuario })
  
  return userFound
  
}

async function getUsuariosAlerta(idUsuarios) {

  

  const Usuarios = await User.find({
      _id: idUsuarios 
  });
  
  return Usuarios
}












module.exports = {
  create,
  findAll,
  agregarUsuarioEnUnaAlerta,
  getUsuariosAlerta,

}