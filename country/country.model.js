const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var countrySchema = new Schema({
    iso: { type: String, required: true },
    name: { type: String, required: true },
    nicename: { type: String, required: true },
    iso3: { type: String, required: true },
    numcode: { type: Number, required: true },
    phonecode: { type: Number, required: true }
});

countrySchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Country', countrySchema);



