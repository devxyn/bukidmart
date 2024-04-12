import express from 'express';
import process from 'node:process';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use((err, _, res, __) => {
  console.error(err.stack);

  return res.status(500).json({
    error: err?.message ?? 'Something went wrong',
  });
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
