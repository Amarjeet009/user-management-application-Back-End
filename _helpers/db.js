const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    Country: require('../country/country.model'),
    User: require('../users/user.model'),
    

};
