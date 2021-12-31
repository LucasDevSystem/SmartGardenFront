const User = require('../model/Auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.siginup = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;

    verifyNullvalues(userName, password);
    await verifyExistingUser(userName);

    createUser(userName, password);
  } catch (error) {
    console.log(error);
  }
  //   VERIFCATION FUNCTIONS
  async function verifyExistingUser(userName) {
    const oldUser = await User.findOne({userName});

    if (oldUser) {
      response(409);
    }
    return false;
  }

  function verifyNullvalues(userName, password) {
    if (!(userName && password)) {
      response(400);
    }
  }
  /// CREATE USER FUNCTION
  // encript the password before sendo to DB
  async function createUser(userName, password) {
    const encriptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      password: encriptedPassword,
    });
    response(200, user);
  }
  function response(statusCode, message) {
    switch (statusCode) {
      case 200:
        res.status(200).json(message);
        break;
      case 400:
        res.status(400).send('null values');
        break;
      case 409:
        res.status(409).send('usuario existente');
        break;

      default:
        break;
    }
  }
};

exports.sigin = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;
    const user = await User.findOne({userName});
    if (!user) {
      return res.json({status: 'error', error: 'non-existent user'});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    console.log(passwordCompare);
    if (passwordCompare) {
      const token = jwt.sign(
        {
          id: user._id,
          userName: user.useName,
        },
        JWT_SECRET,
        {
          expiresIn: 86400,
        },
      );
      return res.json({status: 'loged', token: token});
    } else {
      return res.json({status: 'error', error: 'incorrect password'});
    }
  } catch (error) {}
};
