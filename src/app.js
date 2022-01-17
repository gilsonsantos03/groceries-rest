const CategoryService = require('./services/CategoryService')
const ProductService = require('./services/ProductService')
const OrderService = require('./services/OrderService');

const { catalogController } = require('./controllers/CatalogController');
const DataValidation = require('./middlewares/DataValidation');

const express = require('express');
const axios  = require('axios');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(introMessage);
});

app.get("/catalogo", catalogController.showProducts()); 
app.post("/adicionar", DataValidation.validate, catalogController.addProduct());
app.delete("/remover", DataValidation.validate, catalogController.removeProduct());
app.get("/pedido", catalogController.showOrder());
app.post("/limpar", catalogController.clearOrder());
app.post("/finalizar", catalogController.doCheckout());

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

fluxo4()

// Exports
module.exports = {
    app,
};

// Helpers

const introMessage = `
Olá, para visualizar o os produtos disponíveis envie: "catalogo".</br>
Para adicionar opções ao pedido envie: 
"adicionar opção quantidade".</br>
Por exemplo: "adicionar laranja 4"</br>
Para visualizar seu pedido envie: 
"pedido"</br>
Para remover um produto do seu pedido envie: 
"remover opção"</br>
Para limpar o pedido envie: 
"limpar"</br>
Para finalizar o pedido envie:
"finalizar" 
`;