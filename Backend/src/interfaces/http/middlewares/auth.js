```javascript
const AuthService = require('../../../application/services/AuthService');
const MongoUserRepository = require('../../../infrastructure/repositories/MongoUserRepository');

const authService = new AuthService(new MongoUserRepository());

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Not authorized - No token' });
    }

    const user = await authService.verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized - Invalid token' });
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'You do not have permission to perform this action' 
      });
    }
    next();
  };
};

module.exports = { protect, restrictTo };
```