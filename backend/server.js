import express from 'express';
import cors from 'cors';
import {log} from 'console';
import users from './routes/helloWorld.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', users);

//start server
app.listen(PORT, () => {
  log(`Server listening on port ${PORT}`);
});
