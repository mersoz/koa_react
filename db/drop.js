const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
const User = require('../models/user');

mongoose.connect(dbURI);
User.collection.drop();
mongoose.connection.close();
