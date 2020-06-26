const express = require("express.js")

const server = express()

server.use(express.json())

module.exports = server;