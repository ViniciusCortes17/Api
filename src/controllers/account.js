const axios = require('axios')

const storeAccount = async (req, res) => {
    try {
        const { cnpjsh, tokensh } = req.headers
        const body = req.body

        return res.json({resposta:'ok'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {storeAccount}