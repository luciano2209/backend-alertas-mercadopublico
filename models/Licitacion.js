const mongoose = require('mongoose');

const CompradorSchema = new mongoose.Schema({ 
  CodigoOrganismo: {
    type: String,
    required: true,
  },
  NombreOrganismo: {
    type: String,
    required: true,
  },
  RutUnidad: {
    type: String,
    required: true,
  },
  CodigoUnidad: {
    type: String,
    required: true,
  },
  NombreUnidad: {
    type: String,
    required: true,
  },
  DireccionUnidad: {
    type: String,
    required: true,
  },
  ComunaUnidad: {
    type: String,
    required: true,
  },
  RegionUnidad: {
    type: String,
    required: true,
  },
  RutUsuario: {
    type: String,
    required: true,
  },
  CodigoUsuario: {
    type: String,
    required: true,
  },
  NombreUsuario: {
    type: String,
    required: true,
  },
  CargoUsuario: {
    type: String,
    required: true,
  }
  
})

const FechasSchema = new mongoose.Schema({ 
  FechaCreacion: {
    type: String,
    required: true,
  },
  FechaCierre: {
    type: String,
    required: true,
  },
  FechaInicio: {
    type: String,
    required: true,
  },
  FechaFinal: {
    type: String,
    required: true,
  },
  FechaPubRespuestas: {
    type: String,
    required: true,
  },
  FechaActoAperturaTecnica: {
    type: String,
    required: true,
  },
  FechaActoAperturaEconomica: {
    type: String,
    required: true,
  },
  FechaPublicacion: {
    type: String,
    required: true,
  },
  FechaAdjudicacion: {
    type: String,
    required: true,
  },
  FechaEstimadaAdjudicacion: {
    type: String,
    required: true,
  },
  FechaSoporteFisico: {
    type: String,
    required: true,
  },
  FechaTiempoEvaluacion: {
    type: String,
    required: true,
  },
  FechaEstimadaFirma: {
    type: String,
    required: true,
  },
  FechasUsuario: {
    type: String,
    required: true,
  },
  FechaVisitaTerreno: {
    type: String,
    required: true,
  },
  FechaEntregaAntecedentes: {
    type: String,
    required: true,
  }

  
})
const ListadoSchema = new mongoose.Schema({ 
  Correlativo: {
    type: Number,
    required: true,
  },
  CodigoProducto: {
    type: Number,
    required: true,
  },
  Categoria: {
    type: String,
    required: true,
  },
  NombreProducto: {
    type: String,
    required: true,
  },
  Descripcion: {
    type: String,
    required: true,
  },
  UnidadMedida: {
    type: String,
    required: true,
  },
  Cantidad: {
    type: Number,
    required: true,
  },
  Adjudicacion: {
    type: String,
    required: true,
  },
})

const ItemsSchema = new mongoose.Schema({ 
  Cantidad: {
    type: Number,
    required: true,
  },
  Listado: {
    type: [ListadoSchema]
  },
})




const LicitacionSchema = new mongoose.Schema({ 
  CodigoExterno: {
    type: String,
    required: true,
  },
  Nombre: {
    type: String,
    required: true,
  },
  CodigoEstado: {
    type: Number,
    required: true,
  },
  Descripcion: {
    type: String,
    required: true,
  },
  FechaCierre: {
    type: Date,
    required: true,
  },
  Estado: {
    type: String,
    required: true,
  },
  Comprador: {
    type: CompradorSchema
    
  },
  DiasCierreLicitacion: {
    type: String,
    required: true,
  },
  Informada: {
    type: Number,
    required: true,
  },
  CodigoTipo: {
    type: Number,
    required: true,
  },
  Tipo: {
    type: String,
    required: true,
  },
  TipoConvocatoria: {
    type: String,
    required: true,
  },
  Moneda: {
    type: String,
    required: true,
  },
  Etapas: {
    type: Number,
    required: true,
  },
  EstadoEtapas: {
    type: String,
    required: true,
  },
  TomaRazon: {
    type: String,
    required: true,
  },
  EstadoPublicidadOfertas: {
    type: Number,
    required: true,
  },
  JustificacionPublicidad: {
    type: String,
    required: true,
  },
  Contrato: {
    type: String,
    required: true,
  },
  Obras: {
    type: String,
    required: true,
  },
  CantidadReclamos: {
    type: Number,
    required: true,
  },
  Fechas: {
    type: FechasSchema
  },
  UnidadTiempoEvaluacion: {
    type: Number,
    required: true,
  },
  DireccionVisita: {
    type: String,
    required: true,
  },
  DireccionEntrega: {
    type: String,
    required: true,
  },
  Estimacion: {
    type: Number,
    required: true,
  },
  FuenteFinanciamiento: {
    type: String,
    required: true,
  },
  VisibilidadMonto: {
    type: Number,
    required: true,
  },
  MontoEstimado: {
    type: Number,
    required: false,
  },
  Tiempo: {
    type: String,
    required: true,
  },
  UnidadTiempo: {
    type: String,
    required: true,
  },
  Modalidad: {
    type: Number,
    required: true,
  },
  TipoPago: {
    type: String,
    required: true,
  },
  NombreResponsablePago: {
    type: String,
    required: true,
  },
  EmailResponsablePago: {
    type: String,
    required: true,
  },
  NombreResponsableContrato: {
    type: String,
    required: true,
  },
  EmailResponsableContrato: {
    type: String,
    required: true,
  },
  FonoResponsableContrato: {
    type: String,
    required: true,
  },
  ProhibicionContratacion: {
    type: String,
    required: true,
  },
  SubContratacion: {
    type: String,
    required: true,
  },
  UnidadTiempoDuracionContrato: {
    type: Number,
    required: true,
  },
  TiempoDuracionContrato: {
    type: String,
    required: true,
  },
  TipoDuracionContrato: {
    type: String,
    required: true,
  },
  JustificacionMontoEstimado: {
    type: String,
    required: true,
  },
  ObservacionContract: {
    type: String,
    required: true,
  },
  ExtensionPlazo: {
    type: Number,
    required: true,
  },
  EsBaseTipo: {
    type: Number,
    required: true,
  },
  UnidadTiempoContratoLicitacion: {
    type: String,
    required: true,
  },
  ValorTiempoRenovacion: {
    type: String,
    required: true,
  },
  PeriodoTiempoRenovacion: {
    type: String,
    required: true,
  },
  EsRenovable: {
    type: Number,
    required: true,
  },
  Adjudicacion: {
    type: String,
    required: true,
  },
  Items: {
    type: ItemsSchema
  },

  
});



module.exports = mongoose.model('Licitaciones', LicitacionSchema)