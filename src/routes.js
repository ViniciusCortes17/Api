const { Router } = require('express')
const routes = new Router()

const Payer = require('./controllers/payer')
const Account = require('./controllers/account')
const Transfer = require('./controllers/transfer')
const Billet = require('./controllers/billet')
const Remittance = require('./controllers/remittance')
const { route } = require('./server')

//Payer
routes.post('/payer', Payer.storePayer)
routes.get('/payer', Payer.getPayer)

//Account
routes.post('/account', Account.storeAccount)
routes.get('/account', Account.getAccount)

//Transfer
routes.post('/transfer', Transfer.paymentTransfer)

//Billet
routes.post('/billet', Billet.paymentBillet)

//remittance
routes.post('/remittance', Remittance.postRemittance)
routes.get('/remittance', Remittance.getRemittance)



module.exports = routes