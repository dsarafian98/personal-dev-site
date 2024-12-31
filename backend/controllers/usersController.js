import express from 'express';
import mongoose from 'mongoose';

// This will help us connect to the database
//import connection from '../database/connection.js';

// This help convert the id from string to ObjectId for the _id.
import {ObjectId} from 'mongodb';

// usersRouter is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
function usersController() {
  let db = mongoose.connection; //connection().connect();
  // This section will help you get a list of all the users.
  const getAllUsers = (req, res, next) => {
    let collection = db.collection('users');
    let results = collection.find({}).toArray();
    res.send(results).status(200);
  };

  // This section will help you get the info for one user.
  const getUserInfo = (req, res) => {
    usersController.get('/getUserInfo', async (req, res) => {
      let collection = await db.collection('users');
      let query = {username: req.params.username};
      let result = await collection.findOne(query);

      if (!result) res.send('Not found').status(404);
      else res.send(result).status(200);
    });
  };

  // This section will help you create a new record.
  const addNewUser = (req, res) => {
    usersController.post('/addUser', async (req, res) => {
      try {
        let newUser = {
          username: 'clairojuul',
          displayName: "clair o'juul",
          lastUpdated: new Date(),
          created: new Date(),
        };
        let collection = await db.collection('Users');
        let result = await collection.insertOne(newUser);
        res.send(result).status(204);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error adding record');
      }
    });
  };
}

export default usersController;
