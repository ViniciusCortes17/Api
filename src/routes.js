const { Router } = require('express')
const routes = new Router()

const Payer = require('./controllers/payer')
const Account =require('./controllers/account')

routes.post('/payer', Payer.storePayer)
routes.get('/payer', Payer.getPayer)

//Account
routes.post('/account', Account.storeAccount)


module.exports = routes