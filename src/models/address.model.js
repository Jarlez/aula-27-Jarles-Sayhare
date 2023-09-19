const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({

    user_id: { type: String, required: true },
    street: { type: String, required: true },
    neighborhood: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },

});

module.exports = mongoose.model('Address', addressSchema)
