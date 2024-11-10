import {ObjectId} from 'mongodb';
const mongoose = require('mongoose');

const userConcertsSchema = new mongoose.Schema({
  _id: {type: ObjectId},
  userId: {
    type: ObjectId,
    required: true,
  },
  concertId: {
    type: ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('UserConcert', userConcertsSchema);
