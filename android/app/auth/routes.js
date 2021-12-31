const express = require('express');
const AuthController = require('./controller/Auth');
const router = express.Router();
//post routes
router.post('/signup', AuthController.siginup);
//get routes
router.post('/sigin', AuthController.sigin);

router.get('/', (req, res) => {
  res.send('ola ');
});

module.exports = router;
