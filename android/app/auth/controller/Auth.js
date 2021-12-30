const User = require('../model/Auth');
const bcrypt = require('bcrypt');

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

exports.siginin = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;
  } catch (erro) {}
};
