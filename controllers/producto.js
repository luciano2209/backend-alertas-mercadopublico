const Producto = require('../models/Producto') 


async function findAll() {
  return await Producto.find({});
}

module.exports = {
  findAll,
}