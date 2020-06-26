const knex = require("kenx")
const knexfile = require("../knexfile")

module.exports = knex(knexfile.development)