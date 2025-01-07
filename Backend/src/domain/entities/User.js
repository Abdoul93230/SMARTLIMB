```javascript
class User {
  constructor({ id, email, password, role, createdAt }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role || 'user';
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      role: this.role,
      createdAt: this.createdAt
    };
  }
}

module.exports = User;
```