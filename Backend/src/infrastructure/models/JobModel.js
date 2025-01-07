```javascript
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  candidate: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String,
    cv: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['En attente', 'En cours', 'Accepté', 'Refusé'],
    default: 'En attente'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['CDI', 'CDD', 'Stage', 'Freelance']
  },
  location: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [{
    type: String
  }],
  qualifications: [{
    type: String
  }],
  benefits: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['Actif', 'Inactif', 'En attente'],
    default: 'Actif'
  },
  applications: [applicationSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);
```