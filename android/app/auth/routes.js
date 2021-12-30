const express = require('express');
const AuthController = require('./controller/Auth');
const router = express.Router();
//post routes
router.post('/signup', AuthController.siginup);
//get routes
router.get('/sigin', AuthController.getUsers);

router.get('/', (req, res) => {
  res.send('ola ');
});

module.exports = router;
