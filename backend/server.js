import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
//import bodyParser from 'body-parser'
import usersRouter from './routes/users.js';
import userConcertsRouter from './routes/userConcerts.js';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.get('/users', usersRouter);
//app.get('/user', users);
app.get('/userConcerts/getAll', userConcertsRouter);
app.get('/messages', (req, res) => {
  res.send('Hello');
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
