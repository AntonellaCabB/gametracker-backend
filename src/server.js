require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/juegos', require('./routes/juegosRoutes'));

// Health check
app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});