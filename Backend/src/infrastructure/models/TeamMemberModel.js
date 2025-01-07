```javascript
const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  social: {
    linkedin: String,
    github: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
```