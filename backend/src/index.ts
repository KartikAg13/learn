import express from 'express';
import dotenv from 'dotenv';
import pool from './db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
