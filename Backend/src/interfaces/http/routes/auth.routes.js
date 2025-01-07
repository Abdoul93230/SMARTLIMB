```javascript
const express = require('express');
const AuthController = require('../controllers/AuthController');
const AuthService = require('../../../application/services/AuthService');
const MongoUserRepository = require('../../../infrastructure/repositories/MongoUserRepository');
const { protect } = require('../middlewares/auth');

const router = express.Router();
const userRepository = new MongoUserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));
router.get('/me', protect, authController.getMe.bind(authController));

module.exports = router;
```