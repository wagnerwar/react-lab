const server = require('./config/server')
const db = require('./config/database')
require('./config/routes')(server, db)
