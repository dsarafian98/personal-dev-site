import {ObjectId} from 'mongodb';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('User', userSchema);
