require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});