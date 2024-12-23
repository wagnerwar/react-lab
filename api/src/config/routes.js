const express = require('express')
const service = require('../service')
const auth = require('./auth')
const AuthService = require('../services/authService')

module.exports = function(server, db) {
    
    const router = express.Router()
    server.use('/api', router)
    router.use(auth)

    router.get('/', (req, res) => {
        res.send('Birds home page')
    })
    router.get('/about', (req, res) => {
        res.send('About birds')
    })

    router.get('/listar', (req, res) => {
        try{
            service.listar(db, res)
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })

    router.get('/count', (req, res) => {
        try{
            service.obterQuantidade(db, res);
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })

    router.post('/inserir', (req, res) => {
        try{
            let dados = req.body;
            service.inserir(db, dados, res);
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })

    router.post('/atualizar', (req, res) => {
        try{
            let dados = req.body;
            service.atualizar(db, dados, res);
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })

    router.get('/obter/:id', (req, res) => {
        try{
            service.obter(db, req.params.id, res);
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })
    router.delete('/excluir/:id', (req, res) => {
        try{
            service.excluir(db, req.params.id, res);
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })
    router.get('/filtrar/:qr', (req, res) => {
        try{
            service.filtrar(db, req.params.qr , res)
        }catch(ex){
            return res.status(500).json({errors: [ex]})
        }
    })

    const openApi = express.Router()
    server.use('/oapi', openApi) 
    openApi.post('/login', AuthService.login)
    openApi.post('/validateToken', AuthService.validateToken)

}