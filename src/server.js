require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/juegos', require('./routes/juegosRoutes'));
app.use('/api/resenas', require('./routes/resenasRoutes'));

// Health check
app.get('/', (req, res) => res.send({ status: 'ok', env: process.env.NODE_ENV || 'dev' }));

// Error handler (simple)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
