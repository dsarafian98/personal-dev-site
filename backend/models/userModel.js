import {ObjectId} from 'mongodb';
import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const userSchema = new Schema(
  {
    _id: {type: ObjectId},
    username: {
      type: String,
      required: true,
    },
    created: {
      type: Date,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    lastUpdated: {
      type: Date,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
  },
  {bufferCommands: false},
);

export default mongoose.model('User', userSchema);
