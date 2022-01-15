const OrderService = require("../services/OrderService");

class CatalogController {
    showProducts() {
        return (req, res) => {
            res.send( 
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
            OrderService.addProduct(product.id, product.qty)
            res.send("Produto adicionado com sucesso")
        };
    }

    removeProduct() {
        return (req, res) => {
            const product = req.body;
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
            OrderService.clearOrder()
            res.send("Carrinho limpo!")
        };
    }

    doCheckout() {
        return (req, res) => {
            let order = OrderService.getOrder()
            if (order.products.length == 0) {
                res.send(`Pedido não pode ser finalizado, pois você ainda não adicionou nada ao carrinho`)
            } else {
                res.send(`Pedido finalizado! Volte sempre :)`)
            }
           
        };
    }
}

const catalogController = new CatalogController();

module.exports = {
    catalogController
};