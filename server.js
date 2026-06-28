// Basic Express server template
// Configure this file for your backend setup

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes (to be implemented)
// app.use('/api/menu', require('./backend/routes/menu'));
// app.use('/api/orders', require('./backend/routes/orders'));
// app.use('/api/payments', require('./backend/routes/payments'));
// app.use('/api/receipts', require('./backend/routes/receipts'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
