const { gql } = require("apollo-server");

const typeDefs = gql `
  # Types
  type User {
    id: ID
    firstname: String
    lastname: String
    alerts: [AlertUser]
    email:String
    password: String
    rol:String
    alertsId:[String]
  }

  type AlertUser {
    id:ID
    nameAlert: String
    active: Boolean
    createAt: String
    typeBidding: String
  }

  type Token {
    token: String
  }

  type Licitacion {
    id: ID
    CodigoExterno: String
    Nombre: String
    CodigoEstado: Int
    Descripcion: String
    FechaCierre: String
    Estado: String
    Comprador: Comprador
    DiasCierreLicitacion: String
    Informada: Int
    CodigoTipo: Int
    Tipo: String
    TipoConvocatoria: String
    Moneda: String
    Etapas: Int
    EstadoEtapas: String
    TomaRazon: String
    EstadoPublicidadOfertas: Int
    JustificacionPublicidad: String
    Contrato: String
    Obras: String
    CantidadReclamos: Int
    Fechas: Fechas
    UnidadTiempoEvaluacion: Int
    DireccionVisita: String
    DireccionEntrega: String
    Estimacion: Int
    FuenteFinanciamiento: String
    VisibilidadMonto: Int
    MontoEstimado: Float
    Tiempo: String
    UnidadTiempo: String
    Modalidad: Int
    TipoPago: String
    NombreResponsablePago: String
    EmailResponsablePago: String
    NombreResponsableContrato: String
    EmailResponsableContrato: String
    FonoResponsableContrato: String
    ProhibicionContratacion: String
    SubContratacion: String
    UnidadTiempoDuracionContrato: Int
    TiempoDuracionContrato: String
    TipoDuracionContrato: String
    JustificacionMontoEstimado: String
    ObservacionContract: String
    ExtensionPlazo: Int
    EsBaseTipo: Int
    UnidadTiempoContratoLicitacion: String
    ValorTiempoRenovacion: String
    PeriodoTiempoRenovacion: String
    EsRenovable: Int
    Adjudicacion: String
    Items: Items
  }

  type Comprador {
    CodigoOrganismo: String
    NombreOrganismo: String
    RutUnidad: String
    CodigoUnidad: String
    NombreUnidad: String
    DireccionUnidad: String
    ComunaUnidad: String
    RegionUnidad: String
    RutUsuario: String
    CodigoUsuario: String
    NombreUsuario: String
    CargoUsuario: String
  }

  type Fechas {
    FechaCreacion: String
    FechaCierre: String
    FechaInicio: String
    FechaFinal: String
    FechaPubRespuestas: String
    FechaActoAperturaTecnica: String
    FechaActoAperturaEconomica: String
    FechaPublicacion: String
    FechaAdjudicacion: String
    FechaEstimadaAdjudicacion: String
    FechaSoporteFisico: String
    FechaTiempoEvaluacion: String
    FechaEstimadaFirma: String
    FechasUsuario: String
    FechaVisitaTerreno: String
    FechaEntregaAntecedentes: String
  }

  type Items {
    Cantidad: Int
    Listado: [Listado]
    
  }

  type Listado {
    Correlativo: Int
    CodigoProducto: Int
    CodigoCategoria: String
    Categoria: String
    CorrelNombreProductotivo: String
    UnidadMedida: String
    Cantidad: Float
    Adjudicacion: String 
  }

  type Producto {
    codigoProducto: Int
    descripcion: String
  }

  type Alerta {
    id:ID
    nombre:String
    descripcion:String
    productos: [Int]
    tipoLicitaciones:[String] 
    unidadesMonetarias:[String] 
    montosEstimados:[Int] 
    modalidadesPagos:[Int] 
    unidadesTiempDeEvaluacion:[Int]
    unidadesTiempoDuracionContrato:[Int]
    idUsuarios: [String]

  }
  type LicitacionPorAlerta {
    alerta:Alerta
    licitaciones:[Licitacion]
  }

  # Inputs

  input UserInput {
    email: String!
    firstname: String
    lastname: String
    password: String!
    rol: String
  }
  input AlertUserInput {
    userId:String!
    nameAlert:String!
    typeBidding: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input AlertaInput {
    nombre:String
    descripcion:String
    productos: [String]
    tipoLicitaciones:[String] 
    unidadesMonetarias:[String] 
    montosEstimados:[Int] 
    modalidadesPagos:[Int] 
    unidadesTiempDeEvaluacion:[Int]
    unidadesTiempoDuracionContrato:[Int]
  }

  input agregarUsuarioEnUnaAlertaInput {
    idAlerta:String 
    idUsuario:String
  }


  

  type Query {
    #User
    getUsers: [User]
    getUser(id: ID): User
    getLicitacionesPorAlerta(userId: ID): [LicitacionPorAlerta]


    #Licitacion
    getLicitaciones: [Licitacion]
    getCienLicitaciones: [Licitacion]


    # Productos
    getProductos: [Producto]

    # Alerta
    getAlertas: [Alerta]
    getUsuariosAlerta(idUsuarios: [String]): [User]

  }

  type Mutation {
    #User
    register(input: UserInput):User
    login(input: LoginInput):Token
    addAlert(input: AlertUserInput):User
    #Alerta
    create(input: AlertaInput): Alerta
    agregarUsuarioEnUnaAlerta(input:agregarUsuarioEnUnaAlertaInput):User
    
  }

  

`;

module.exports = typeDefs