const userController = require('./../controllers/user') 
const licitacionController = require('./../controllers/licitacion') 
const productoController = require('./../controllers/producto')
const alertaController = require('./../controllers/alerta')


const resolvers = {
  Query: {
    //User
    getUsers: () => userController.findAll(),
    getUser: (_,{id}) => userController.find(id),
    getLicitacionesPorAlerta: (_,{userId}) => userController.getLicitacionesPorAlerta(userId),

    //Licitacion
    getLicitaciones: () => licitacionController.findAll(),
    getCienLicitaciones: () => licitacionController.findCien(),


    //Productos
    getProductos: () => productoController.findAll(),
    //Alerta
    getAlertas: () => alertaController.findAll(),
    getUsuariosAlerta: (_,{idUsuarios}) => alertaController.getUsuariosAlerta(idUsuarios)

  },
  Mutation: {
    //User
    register: (_,{ input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
    addAlert: (_, { input }) => userController.addAlert(input),

    //Alerta
    create: (_,{ input }) => alertaController.create(input),
    agregarUsuarioEnUnaAlerta: (_, { input }) => alertaController.agregarUsuarioEnUnaAlerta(input),
    
  }
}

module.exports = resolvers