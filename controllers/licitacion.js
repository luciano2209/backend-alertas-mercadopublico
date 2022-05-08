const Licitacion = require('../models/Licitacion') 


async function findAll() {
  return await Licitacion.find({});
}

async function findCien() {
  return await Licitacion.find({}).limit(100);
}

async function findByAlert(input) {

  const { 
    productos,
    tipoLicitaciones,
    unidadesMonetarias,
    montosEstimados,
    modalidadesPagos,
    unidadesTiempDeEvaluacion,
    // unidadesTiempoDuracionContrato
  } = input

  const licitaciones = await Licitacion.find({
      $and: [
        { "Items.Listado.CodigoProducto": productos }
      ]
  });
  
  return licitaciones
}




module.exports = {
  findAll,
  findByAlert,
  findCien
}