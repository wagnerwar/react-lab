const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const server = express()
const cors = require('../middleware/cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors);

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server