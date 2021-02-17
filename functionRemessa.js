async function postRemittance(){
    const cnpj = document.getElementById('cnpjsh').value
    const token = document.getElementById('tokensh').value
    const payercpfcnpj = document.getElementById('payercpfcnpj').value
    const textoTeste = JSON.parse(document.getElementById('txtJason').value)
  
    const header = new Headers();
    header.append("cnpjsh", cnpj)
    header.append("tokensh", token)
    header.append("payercpfcnpj", payercpfcnpj)
    header.append("Accept", "application/json")
    header.append("Content-Type", "application/json")
  
    console.log(textoTeste)
    const options = {
      method: "POST",
      body: JSON.stringify(textoTeste),
      headers: header
    }
    const response = await fetch("http://localhost:4567/remittance", options)
    const retorno = await response.json()
      // data = retorno.data
      const obj = retorno
      let txt = JSON.stringify(obj)
      //console.log(data)
      document.getElementById('response').innerHTML = txt
  }

  async function getRemittance(){
    const cnpj = document.getElementById('cnpjsh').value
    const token = document.getElementById('tokensh').value
    const payercpfcnpj = document.getElementById('payercpfcnpj').value
    const uniqueId = document.getElementById('uniqueId').value
  
    const header = new Headers();
    header.append("cnpjsh", cnpj)
    header.append("tokensh", token)
    header.append("payercpfcnpj", payercpfcnpj)
    header.append("uniqueId", uniqueId)
    header.append("Accept", "application/json")
    header.append("Content-Type", "application/json")
  
    const options = {
      method: "GET",
      headers: header
    }
  
    const response = await fetch("http://localhost:4567/remittance", options)
    const retorno = await response.json()
      const data = retorno.data
      const obj = data
      let txt = JSON.stringify(obj)
      console.log(data)
      document.getElementById('response').innerHTML = txt
  
  }