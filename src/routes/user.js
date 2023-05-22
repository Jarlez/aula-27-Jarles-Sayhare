const express = require("express");

const User = require('../models/user.model')
const Address = require('../models/address.model')
const Vehicle = require('../models/vehicle.model')

const user_route = express.Router();

user_route.get("/", async(req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (e) {
        console.log(e)
    }
})

user_route.get("/:id", async(req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        const address = await Address.findOne({
            user_id: id
        })
        const vehicle = await Vehicle.findOne({
            user_id: id
        })
        res.json({
            user,
            address,
            vehicle
        })
    } catch (e) {
        console.log(e)
    }
})

user_route.post("/", async(req, res) => {
    try {
        const user = new User(req.body)
        const response = await user.save()
        res.json(response)
    } catch (e) {
        console.log(e)
    }
})

user_route.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const user = await User.updateOne({ _id }, req.body)
        res.json(user)
    } catch (e) {

    }
})

user_route.delete("/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const response = await User.deleteOne({ _id })
        const address = await Address.findOne({
            user_id: _id
        })
        const vehicle = await Vehicle.findOne({
            user_id: _id
        })
        await Address.deleteOne({ _id: address._id })
        await Vehicle.deleteOne({ _id: vehicle._id })
        res.json(response)
    } catch (e) {
        console.log(e)
    }
})

module.exports = user_route