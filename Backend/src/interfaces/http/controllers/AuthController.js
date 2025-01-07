```javascript
class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async register(req, res) {
    try {
      const { user, token } = await this.authService.register(req.body);
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const { user, token } = await this.authService.login(email, password);
      res.json({ user, token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async getMe(req, res) {
    try {
      res.json(req.user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = AuthController;
```