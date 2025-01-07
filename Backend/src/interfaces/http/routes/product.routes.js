```javascript
const express = require('express');
const ProductController = require('../controllers/ProductController');
const ProductService = require('../../../application/services/ProductService');
const MongoProductRepository = require('../../../infrastructure/repositories/MongoProductRepository');
const { protect, restrictTo } = require('../middlewares/auth');

const router = express.Router();
const productRepository = new MongoProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get('/', productController.getAllProducts.bind(productController));
router.get('/:id', productController.getProductById.bind(productController));

// Routes protégées pour l'admin
router.use(protect);
router.use(restrictTo('admin'));

router.post('/', productController.createProduct.bind(productController));
router.put('/:id', productController.updateProduct.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));

module.exports = router;
```