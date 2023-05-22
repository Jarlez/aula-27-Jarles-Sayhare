const express = require("express")

const Vehicle = require('../models/vehicle.model')

const vehicle_route = express.Router()

vehicle_route.get("/:id", async(req, res) => {
    try {
        const { id } = req.params
        const vehicle = await Vehicle.findById(id)
        res.json(vehicle)
    } catch (e) {
        console.log(e)
    }
})

vehicle_route.get("", async(req, res) => {
    try {
        const vehicle = await Vehicle.find()
        res.json(vehicle)
    } catch (e) {
        console.log(e)
    }
})

vehicle_route.post("", async(req, res) => {
    try {
        const vehicle = new Vehicle(req.body)
        const response_vehicle = await vehicle.save()
        res.json(response_vehicle)
    } catch (e) {
        console.log(e)
    }
})


vehicle_route.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const vehicle = await Vehicle.updateOne({ _id }, req.body)
        res.json(vehicle)
    } catch (e) {

    }
})

vehicle_route.delete("/:id", async(req, res) => {

    try {
        const _id = req.params.id
        const response_vehicle = await Vehicle.deleteOne({ _id })
        res.json(response_vehicle)
    } catch (e) {
        console.log(e)
    }
})

module.exports = vehicle_route