const bcryptjd = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User') 
const Alerta = require('../models/Alerta') 
const LicitacionController = require('../controllers/licitacion') 



function createToken(user, SECRET_KEY, expiresIn) {
  const { id, firstname, lastname, email, rol } = user
  const payload = {
    id,
    firstname,
    lastname,
    email,
    rol
  }
  return  jwt.sign(payload, SECRET_KEY, { expiresIn })
}

async function findAll() {
  const users = await User.find({});
  return users
}

async function find(id) {
  const user = await User.findById(id);
  return user
}


async function register(input) {
  const { firstname, lastname, email, password, rol } = input;

  const foundEmail = await User.findOne({email: email}).exec();
  if(foundEmail) throw new Error("Este email ya esta en uso")

  // Encriptar 
  const salt = await bcryptjd.genSaltSync(10);
  input.password = await bcryptjd.hash(password, salt)

  try {
    const user = new User({
      ...input,
      rol: !rol  ? 'usuario': 'admin'
    });
    user.save();
    return user;
  } catch (error) {
    console.log(error) 
  }

}

async function login (input) {
  const { email, password } = input;

  const userFound = await User.findOne({email: email}).exec();
  if(!userFound) throw new Error("Error en el email o la password")

  const passwordSucess = await bcryptjd.compare(password, userFound.password);
  if(!passwordSucess) throw new Error("Error en el email o la password")

  return {
    token: createToken(userFound, process.env.SECRET_KEY, "12h")
  }

}

async function addAlert (input) {

  const { nameAlert, userId, typeBidding } = input;
  const alert = {
    nameAlert,
    typeBidding,
    active:true
  }

  try {
    await User.updateOne(
      { _id: userId }, 
      { $push: { alerts: alert } }
    );
  } catch (error) {
    console.log(error)
  }

  const userFound = await User.findOne({ _id: userId })
  
  return userFound
  
}

async function getLicitacionesPorAlerta (userId) {
 
  try {
    const userFound = await User.findOne({ _id: userId })
                       

    const licitacionesPorAlerta = userFound.alertsId.map(async (alertId) => {

      const alerta = await Alerta.findOne({ _id: alertId })
      const licitacionPorAlerta = await LicitacionController.findByAlert(alerta)
      return {
        alerta: alerta,
        licitaciones: licitacionPorAlerta
      }
      
    })

    return licitacionesPorAlerta


  } catch (error) {
    console.log(error)
  }
  
  
}





module.exports = {
  findAll,
  find,
  register,
  login,
  addAlert,
  getLicitacionesPorAlerta
}