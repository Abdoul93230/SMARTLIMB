const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Premium', 'Standard', 'Software']
  },
  features: [{
    type: String
  }],
  specifications: {
    type: Map,
    of: String
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['En stock', 'Rupture de stock', 'Sur commande'],
    default: 'En stock'
  },
  price: {
    type: String,
    default: 'Sur devis'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);