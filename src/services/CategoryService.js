const { categories } = require('../models/Categories')

class CategoryService {
  static listCategories() {
    return categories
  }
}

module.exports = CategoryService