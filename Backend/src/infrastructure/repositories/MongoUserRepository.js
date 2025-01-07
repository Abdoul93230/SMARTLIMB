```javascript
const User = require('../../domain/entities/User');
const IUserRepository = require('../../domain/ports/repositories/IUserRepository');
const UserModel = require('../models/UserModel');

class MongoUserRepository extends IUserRepository {
  async findById(id) {
    const user = await UserModel.findById(id);
    return user ? new User(user) : null;
  }

  async findByEmail(email) {
    const user = await UserModel.findOne({ email });
    return user ? new User(user) : null;
  }

  async create(userData) {
    const user = new UserModel(userData);
    await user.save();
    return new User(user);
  }

  async update(id, userData) {
    const user = await UserModel.findByIdAndUpdate(id, userData, { new: true });
    return user ? new User(user) : null;
  }

  async delete(id) {
    await UserModel.findByIdAndDelete(id);
  }
}

module.exports = MongoUserRepository;
```