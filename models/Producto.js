const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({ 
  codigoProducto: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Productos', ProductoSchema)