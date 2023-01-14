const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fighterSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    record: {
        type: Number,
    }
})

module.exports = mongoose.model('Fighter', fighterSchema)