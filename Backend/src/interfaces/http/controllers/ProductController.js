```javascript
class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await this.productService.getProductById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await this.productService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      await this.productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = ProductController;
```