const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({

    user_id: { type: String, required: true },
    brand: { type: String, required: true },
    value: { type: String, required: true },
    year_of_manufacture: { type: String, required: true },
    color: { type: String, required: true },
    fuel_type: { type: String, required: true },

});

module.exports = mongoose.model('Vehicle', vehicleSchema)