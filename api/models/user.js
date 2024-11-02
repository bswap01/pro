const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  attention: [
    "string1", 
    "string2", 
    "string3" 
  ],
  imageUrls: [
    {
      type: String, // Store URLs of profile pictures
    },
  ], 
  likedProfiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  receivedLikes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  blockedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  notificationPreferences: {
    // Define notification preferences here
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;