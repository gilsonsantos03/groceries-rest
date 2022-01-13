const CategoryService = require('./services/CategoryService')
const ProductService = require('./services/ProductService')
const OrderService = require('./services/OrderService');

const { catalogoController } = require('./controllers/CatalagoController');

const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(introMessage);
});

app.get("/catalogo", catalogoController.showProducs());

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