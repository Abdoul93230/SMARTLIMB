```javascript
/**
 * Interface pour le service d'authentification
 */
class IAuthService {
  async register(userData) {
    throw new Error('Method not implemented');
  }

  async login(email, password) {
    throw new Error('Method not implemented');
  }

  async verifyToken(token) {
    throw new Error('Method not implemented');
  }

  async generateToken(user) {
    throw new Error('Method not implemented');
  }
}

module.exports = IAuthService;
```