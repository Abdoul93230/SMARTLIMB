```javascript
class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return this.productRepository.findAll();
  }

  async getProductById(id) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async createProduct(productData) {
    return this.productRepository.create(productData);
  }

  async updateProduct(id, productData) {
    const product = await this.productRepository.update(id, productData);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async deleteProduct(id) {
    await this.productRepository.delete(id);
  }

  async getProductsByCategory(category) {
    return this.productRepository.findByCategory(category);
  }
}

module.exports = ProductService;
```