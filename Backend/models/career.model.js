const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['CDI', 'CDD', 'Stage', 'Freelance']
  },
  department: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  requirements: [{
    type: String
  }],
  responsibilities: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['Actif', 'Inactif', 'En attente'],
    default: 'Actif'
  },
  applications: [{
    candidate: {
      name: String,
      email: String,
      phone: String,
      cv: String
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
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);