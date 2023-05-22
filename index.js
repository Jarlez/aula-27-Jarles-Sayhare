const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()

const routes = require("./src/routes")

const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('MongoDB conectado com sucesso!')
    }).catch((e) => {
        console.log(e)
    })

app.get("/", (request, response) => {
    response.send("Hello World")
})



















app.listen(process.env.port, () => {
    console.log(`Serviço está funcionando...${process.env.PORT}`)
})