async function postPayer(){
    const cnpj = document.getElementById('cnpjsh').value
    const token = document.getElementById('tokensh').value
    const textoTeste = JSON.parse(document.getElementById('txtJason').value)
  
    const header = new Headers();
    header.append("cnpjsh", cnpj)
    header.append("tokensh", token)
    header.append("Accept", "application/json")
    header.append("Content-Type", "application/json")

    console.log(textoTeste)
    const options = {
      method: "POST",
      body: JSON.stringify(textoTeste),
      headers: header
    }
    console.log('request')
    const response = await fetch("http://localhost:4567/payer", options)
    console.log(response)
  }

function testar(){
    const cnpj = document.getElementById('cnpjsh').value
    const token = document.getElementById('tokensh').value
    const textoTeste = JSON.parse(document.getElementById('txtJason').value) 

    console.log(cnpj)
    console.log(token)
    console.log(textoTeste)
    return cnpj,token,textoTeste   
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
