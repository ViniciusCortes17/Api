const axios = require('axios')

const storeRemittance = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj} = req.headers

        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')

        const body = req.body
        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/remittance',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
            data: body
        }
        const response = await axios(options)

        console.log(response.data)
 
        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {

        return res.json({
            error: true,
            message: error.message
        })
        
    }
}

const getRemittance = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj, uniqueId} = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj || !uniqueId) throw Error('Necessário informar o cnpj e token da sh!')

        const options = {
            method: 'get',
            url: 'https://staging.pagamentobancario.com.br/api/v1/remittance/' + uniqueId,
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
        }
        const response = await axios(options)

        return res.json({
            resposta:'ok',
            data: response.data
        })
    } catch (error) {
        console.log(error)
}
}

module.exports = {storeRemittance, getRemittance}
