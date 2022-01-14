const OrderService = require("../services/OrderService");

class CatalogController {
    showProducts() {
        return (req, res) => {
            res.json( 
            `<h2> Frutas </h2>
            Banana: R$ 0,50</br>
            Laranja: R$ 1,00</br>
            <h2> Bebidas </h2>
            Coca Cola': R$ 5,00</br>
            Leite: R$ 3,00</br>
            Agua: R$ 2,00</br>
            <h2> Pereciveis </h2>
            Sal: R$ 1,00</br>
            Açucar: R$ 2,00</br>
            Macarrão: R$ 6,00</br>
            <h2> Frios </h2>
            Bisteca: R$ 40,00</br>
            Frango: R$ 21,00</br>`)
        };
    }

    addProduct() {
        return (req, res) => {
            const product = req.body;

            res.json(OrderService.addProduct(product.id, product.qty))
        };
    }

    removeProduct() {
        return (req, res) => {
            const c = req.body;

            res.json(OrderService.deleteProduct(product.id, product.description))
        };
    }

    showOrder() {
        return (req, res) => {
            res.json(OrderService.getOrder())
        };
    }

    clearOrder() {
        return (req, res) => {
            res.json(OrderService.clearOrder())
        };
    }

    doCheckout() {
        return (req, res) => {
            res.json("Pedido finalizado! Volte sempre :)")
        };
    }
}

const catalogController = new CatalogController();

module.exports = {
    catalogController
};