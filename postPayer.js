


async function postPayer(){
    const cnpj = document.getElementById('cnpjsh').value
    const token = document.getElementById('tokensh').value
    const textoTeste = JSON.parse(document.getElementById('txtJason').value)
  
    const header = new Headers();
    header.append("cnpjsh", cnpj)
    header.append("tokensh", token)
  
    const options = {
      method: "POST",
      body: {
        payer: textoTeste
      },
      headers: header
    }
  
    const response = await fetch("http://localhost:4567/payer", options)
    console.log(response.data)
  
  }



function testar(){
    const cnpj = document.getElementById('cnpjsh').value
    const token = document.getElementById('tokensh').value
    const textoTeste = JSON.parse(document.getElementById('txtJason').value) 

    
    // let name = document.getElementById('name').value
    // let cpfCnpj = document.getElementById('cpfcnpj').value
    // let zipcode = document.getElementById('zipcode').value
    // let state = document.getElementById('state').value
    // let city = document.getElementById('city').value
    // let addressNumber = document.getElementById('addressNumber').value
    // let neighborhood = document.getElementById('neighborhood').value
    // let street = document.getElementById('street').value
    // let array = [name,cpfCnpj,zipcode,state,city,addressNumber,neighborhood,street]
    // let teste = JSON.stringify(array)
    // var payer = new Object()
    // payer.name = document.getElementById('name').value
    // payer.cpfCnpj = document.getElementById('cpfcnpj').value
    // payer.zipcode = document.getElementById('zipcode').value
    // payer.state = document.getElementById('state').value
    // payer.city = document.getElementById('city').value
    // payer.addressNumber = document.getElementById('addressNumber').value
    // payer.neighborhood = document.getElementById('neighborhood').value


    

    console.log(cnpj)
    console.log(token)
    console.log(textoTeste)
    return cnpj,token,textoTeste
    // console.log(teste)
    // console.log(payer)


    

    
    
}





    // async function getContente() {
    //     try {
    //         const response = await fetch('http://localhost:4567') 
    //         const data = await response.json()
    //         show(data)           
    //     } catch (error) {
    //         console.error(error)            
    //     }
    
    // }

    // getContente()

    // function show(users){
    //     let output = ''

    //     for(let user of users){
    //         output += `<li>${user.name}</li>`
    //     }

    //     document.querySelector('main').innerHTML = output
    // }
