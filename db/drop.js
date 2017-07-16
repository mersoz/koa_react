const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
const User = require('../models/user');

mongoose.connect(dbURI)
.then(()=>{
  User.collection.drop();
}).finally(()=>{

  mongoose.connection.close();
});
