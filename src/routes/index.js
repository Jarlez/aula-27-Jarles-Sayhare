const express = require("express")
const user_route = require("./user");
const address_route = require("./address");
const vehicle_route = require("./vehicle");

const routes = express.Router()

routes.use("/users", user_route);
routes.use("/address", address_route);
routes.use("/vehicle", vehicle_route)
module.exports = routes