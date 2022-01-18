const axios  = require('axios');
const prompt = require("prompt-sync")()

const express = require('express');

const clientApp = express();

clientApp.use(express.json());

const getURL = async (url) => {
    try {
      return await axios.get(url)
    } catch (error) {
      console.error(error)
    }
}

const showGetResponseAxios = async (url) => {
    const response = await getURL(url)
  
    if (response.data) {
      console.log(response.data)
    } else {
        console.log("Algo deu errado")
    }
}

const postURL = async (url, json) => {
    try {
      return await axios.post(url, json)
    } catch (error) {
      console.error(error)
    }
}

const deleteURL = async (json) => {
    try {
      return await axios.delete("http://localhost:3000/remover", { data: json} )
    } catch (error) {
      console.error(error)
    }
}

// para mostrar o catalogo
// showGetResponseAxios("http://localhost:3000/catalogo")

const fluxo1 = async () => {
    // adicionando produtos
    await postURL("http://localhost:3000/adicionar", {
        "id": 1,
        "qty": 2
    })
    await postURL("http://localhost:3000/adicionar", {
        "id": 2,
        "qty": 2
    })
    // para mostrar o pedido
    await showGetResponseAxios("http://localhost:3000/pedido")
}


const fluxo2 = async () => {
    // adicionando produtos
    await postURL("http://localhost:3000/adicionar", {
        "id": 1,
        "qty": 2
    })
    await postURL("http://localhost:3000/adicionar", {
        "id": 2,
        "qty": 2
    })
    await showGetResponseAxios("http://localhost:3000/pedido")
    // limpando o carrinho
    await postURL("http://localhost:3000/limpar")
    await showGetResponseAxios("http://localhost:3000/pedido")
}

const fluxo3 = async () => {
    // adicionando produtos
    await postURL("http://localhost:3000/adicionar", {
        "id": 3,
        "qty": 4
    })
    await postURL("http://localhost:3000/adicionar", {
        "id": 5,
        "qty": 5
    })
    await showGetResponseAxios("http://localhost:3000/pedido")
    // deletando um produto
    await deleteURL({
        "id": 5,
        "qty": 2
    })
    await showGetResponseAxios("http://localhost:3000/pedido")
}

const fluxo4 = async () => {
    // adicionando produtos
    await postURL("http://localhost:3000/adicionar", {
        "id": 3,
        "qty": 4
    })
    await postURL("http://localhost:3000/adicionar", {
        "id": 5,
        "qty": 5
    })
    await showGetResponseAxios("http://localhost:3000/pedido")
    // finalizando o carrinho
    await postURL("http://localhost:3000/finalizar")
}

// Main


fluxo3()

// Exports
module.exports = {
    clientApp,
};