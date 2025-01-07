```javascript
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Routes
const authRoutes = require('./interfaces/http/routes/auth.routes');
const productRoutes = require('./interfaces/http/routes/product.routes');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
```