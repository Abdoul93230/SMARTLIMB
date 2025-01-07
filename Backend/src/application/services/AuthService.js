```javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const IAuthService = require('../../domain/ports/services/IAuthService');
const User = require('../../domain/entities/User');

class AuthService extends IAuthService {
  constructor(userRepository) {
    super();
    this.userRepository = userRepository;
  }

  async register(userData) {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const user = await this.userRepository.create({
      ...userData,
      password: hashedPassword
    });

    const token = this.generateToken(user);
    return { user: user.toJSON(), token };
  }

  async login(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken(user);
    return { user: user.toJSON(), token };
  }

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await this.userRepository.findById(decoded.id);
      return user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  generateToken(user) {
    return jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
  }
}

module.exports = AuthService;
```