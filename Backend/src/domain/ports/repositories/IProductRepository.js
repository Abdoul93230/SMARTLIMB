```javascript
/**
 * Interface pour le repository des produits
 */
class IProductRepository {
  async findById(id) {
    throw new Error('Method not implemented');
  }

  async findAll() {
    throw new Error('Method not implemented');
  }

  async create(product) {
    throw new Error('Method not implemented');
  }

  async update(id, productData) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }

  async findByCategory(category) {
    throw new Error('Method not implemented');
  }
}

module.exports = IProductRepository;
```