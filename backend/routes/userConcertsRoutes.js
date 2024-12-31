import express from 'express';
import userConcertsModel from '../models/userConcertsModel.js';
import userConcertsController from './../controllers/userConcertsController.js';

// userConcertsRouter is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
userConcertsController();

// This section will help you get a list of all the user concerts.
router.get('/getAll', (req, res) => {
  res.send('HI').status(200);
  userConcertsController.getWholeUserConcertsDb();
});

// This section will help you get the info for one user.
/*router.post(
  '/userConcerts/getConcertsByUser',
  () => functions.getConcertsByUser,
);*/

export default router;
