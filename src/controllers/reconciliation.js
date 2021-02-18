const axios = require('axios')

const getReconciliation = async (req, res) => {
    try {
        const { cnpjsh, tokensh, payercpfcnpj, uniqueId} = req.headers
        if(!cnpjsh || !tokensh || !payercpfcnpj || !uniqueId) throw Error('Necessário informar o cnpj e token da sh!')

        const options = {
            method: 'get',
            url: 'https://staging.pagamentobancario.com.br/api/v1/reconciliation/' + uniqueId,
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

        return res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {getReconciliation}
