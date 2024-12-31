import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
//import bodyParser from 'body-parser'
import userConcertsRouter from './routes/userConcertsRoutes.js';
import usersRouter from './routes/usersRoutes.js';
import {MongoClient, ServerApiVersion} from 'mongodb';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

const app = express();
const jsonParser = bodyParser.json();

app.use(cors());
app.use(express.json());
app.use('/userConcerts', jsonParser, userConcertsRouter);
app.use('/users', jsonParser, usersRouter);

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
