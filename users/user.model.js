var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    confirmpass: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        unique: true,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('User', schema);
