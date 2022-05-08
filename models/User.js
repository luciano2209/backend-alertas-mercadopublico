const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({ 
  nameAlert: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  typeBidding: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

const UserSchema = new mongoose.Schema({ 
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  alerts: {
    type: [AlertSchema],
  },
  rol: {
    type: String
  },
  alertsId: {
    type: Array,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
  
});

module.exports = mongoose.model('User', UserSchema)