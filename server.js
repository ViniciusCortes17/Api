const cors = require ('cors')
const express = require('express')
const app = express()
const axios = require('axios')


app.use(cors())

app.post('/payer', async(req,res) => {
    try {
        const { cnpjsh, tokensh } = req.headers
        const data = req.body
        console.log(cnpjsh)
        console.log(data)
        return res.json({resposta:'ok'})
    } catch (error) {
        console.log(error)
    }
      
})


// app.get('/', async(req, res) => {
// try {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/users')  
//     return res.json(data) 
// } catch (error) {
//     console.error(error)    
// }    
// })

app.listen('4567')