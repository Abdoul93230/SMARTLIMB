```javascript
const Product = require('../../domain/entities/Product');
const IProductRepository = require('../../domain/ports/repositories/IProductRepository');
const ProductModel = require('../models/ProductModel');

class MongoProductRepository extends IProductRepository {
  async findById(id) {
    const product = await ProductModel.findById(id);
    return product ? new Product(product) : null;
  }

  async findAll() {
    const products = await ProductModel.find();
    return products.map(product => new Product(product));
  }

  async create(productData) {
    const product = new ProductModel(productData);
    await product.save();
    return new Product(product);
  }

  async update(id, productData) {
    const product = await ProductModel.findByIdAndUpdate(id, productData, { new: true });
    return product ? new Product(product) : null;
  }

  async delete(id) {
    await ProductModel.findByIdAndDelete(id);
  }

  async findByCategory(category) {
    const products = await ProductModel.find({ category });
    return products.map(product => new Product(product));
  }
}

module.exports = MongoProductRepository;
```