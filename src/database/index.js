const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodrest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;