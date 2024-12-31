// This will help us connect to the database
//import db from '../database/connection.js';

// This help convert the id from string to ObjectId for the _id.
import {ObjectId} from 'mongodb';

function userConcertsController() {
  const getWholeUserConcertsDb = async (req, res, next) => {
    res.send('HI').status(200);
    /*let collection = db.collection('UserConcerts');
    let results = collection.find({}).toArray();
    console.log(collection);
    res.send(results).status(200);*/
  };

  const getConcertsByUser = async (req, res, next) => {
    //let collection = db.collection('UserConcerts');
    let query = {userId: req.params.userId};
    let result = collection.findOne(query);
    res.send(result).status(200);
  };
}
export default userConcertsController;
