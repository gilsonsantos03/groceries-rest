const { products } = require('../models/Products')
var { order } = require('../models/Orders')


class OrderService {
  static addProduct(productId, qty) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        products[i].stock -= qty
        order.products.push({
          id: products[i].id,
          product: products[i].description,
          qty,
          price: qty * products[i].price
        })
        order.totalPrice += qty * products[i].price
      }
    }
  }

  static getOrder() {
    return order
  }

  static deleteProduct(productId) {
    const productToBeRemoved = order.products.find( product => product.id === productId)
    if (typeof productToBeRemoved !== "undefined") {
      order.totalPrice -= productToBeRemoved.price
      const orderUpdated = order.products.filter( product => product.id !== productId)
      order = orderUpdated
      return order
    } else if (order.products.length === 0) {
      return "Você ainda não adicionou nada no carrinho"
    } else {
      return "Produto não encontrado :("
    }
  }

  static clearOrder() {
    order.totalPrice = 0
    order.products.splice(0, order.products.length)
  }
}

module.exports = OrderService