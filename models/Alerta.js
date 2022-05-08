const mongoose = require('mongoose');

const AlertaSchema = new mongoose.Schema({ 
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  productos: {
    type: Array,
    required: true,
  },
  tipoLicitaciones: {
    type: Array,
    required: true,
  },
  unidadesMonetarias: {
    type: Array,
    required: true,
  },
  montosEstimados: {
    type: Array,
    required: true,
  },
  modalidadesPagos: {
    type: Array,
    required: true,
  },
  unidadesTiempDeEvaluacion: {
    type: Array,
    required: true,
  },
  unidadesTiempoDuracionContrato: {
    type: Array,
    required: true,
  },

  idUsuarios: {
    type: Array,
    required: true,
  },



});

module.exports = mongoose.model('Alertas', AlertaSchema)