const db = require('_helpers/db');
const Country = db.Country;

module.exports = {
    getCountry
};



async function getCountry(){
    return await Country.find()
}

     