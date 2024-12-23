const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const env = require('../.env')

const login = (req, res, next) => {
    const password = req.body.password || ''
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(env.senhaValida, salt)
    if (bcrypt.compareSync(password, passwordHash)) {
        const token = jwt.sign({"usuarioSistema": "CLIENTE"}, env.authSecret, {
            expiresIn: "1 day"
        })
        res.json({ token })
    } else {
        return res.status(400).send({errors: ['Usuário/Senha inválidos']})
    }
}
const validateToken = (req, res, next) => {
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, function(err, decoded) {
        return res.status(200).send({valid: !err})
    })
}
  
module.exports = {
    login, 
    validateToken
}
  
  