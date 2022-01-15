const CategoryService = require('./services/CategoryService')
const ProductService = require('./services/ProductService')
const OrderService = require('./services/OrderService');

const { catalogController } = require('./controllers/CatalogController');
const DataValidation = require('./middlewares/DataValidation');

const express = require('express');
const { default: axios } = require('axios');

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