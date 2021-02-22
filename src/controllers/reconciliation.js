const axios = require('axios')
//var FormData = require('form-data')
var fs = require('fs')

const postReconciliation = async (req, res) => {
    console.log('teste')
    try {
        const { cnpjsh, tokensh, payercpfcnpj} = req.headers

        if(!cnpjsh || !tokensh || !payercpfcnpj) throw Error('Necessário informar o cnpj e token da sh!')


        const body = req.body
       // var data = new FormData()
        //data.append('teste01',fs.createReadStream('C:/Users/vinih/Desktop/testando/new 1.txt'))
        console.log(body)
        const options = {
            method: 'post',
            url: 'https://staging.pagamentobancario.com.br/api/v1/reconciliation',
            headers: {
                cnpjsh,
                tokensh,
                payercpfcnpj
            },
            data: body

        }
        const response = {data: 'ok'}// await axios(options)

        console.log(JSON.stringify(response.data))
 
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
    

module.exports = {postReconciliation, getReconciliation }
