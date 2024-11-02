const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

const jwt = require('jsonwebtoken');

mongoose
  .connect('mongodb+srv://Findfriends01:Findfriends01@cluster0.0uibh.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error);
  });
  const User = require('./models/user');
app.listen(port, () => {
  console.log('Server is running on 3000');
});
app.post('/register', async (req, res) => {
  try {

    const userData = req.body;

 
    const newUser = new User(userData);

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');


    const token = jwt.sign({userId: newUser._id}, secretKey,);

    res.status(201).json({token});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});
