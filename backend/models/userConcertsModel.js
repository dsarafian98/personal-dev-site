import {ObjectId} from 'mongodb';
import mongoose from 'mongoose';

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

export default mongoose.model('UserConcert', userConcertsSchema);
