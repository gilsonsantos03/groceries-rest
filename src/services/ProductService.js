const { products } = require('../models/Products')

class ProductService {
  static getProductsByCategory(category) {
    return { products: products.filter(product => product.category === category) }
  }

  static addProduct(productId) {
    console.log(productId)
  }
}

module.exports = ProductService