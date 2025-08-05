const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors=require('cors')
const userRoutes = require('./routes/users');

dotenv.config();
connectDB(); 

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://shecanfoundation-assignment.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
