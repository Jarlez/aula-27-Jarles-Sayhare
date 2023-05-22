const express = require("express")

const Address = require('../models/address.model')

const address_route = express.Router()

address_route.get("/:id", async(req, res) => {
    try {
        const { id } = req.params
        const address = await Address.findById(id)
        res.json(address)
    } catch (e) {
        console.log(e)
    }
})

address_route.get("/", async(req, res) => {
    try {
        const address = await Address.find()
        res.json(address)
    } catch (e) {
        console.log(e)
    }
})

address_route.post("/", async(req, res) => {
    try {
        const address = new Address(req.body)
        const response_address = await address.save()
        res.json(response_address)
    } catch (e) {
        console.log(e)
    }
})

address_route.put("/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const address = await Address.updateOne({ _id }, req.body)
        res.json(address)
    } catch (e) {

    }
})

address_route.delete("/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const response_address = await Address.deleteOne({ _id })
        res.json(response_address)
    } catch (e) {
        console.log(e)
    }
})

module.exports = address_route