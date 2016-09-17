var express = require('express');
var router = express.Router();

router.use(require('../middlewares/auth'));
router.use('/games', require('./game.controller'));
router.use(require('../middlewares/error'));

router.get('/', function(req, res){
  res.json({ message: 'Welcome to the games API'});
});

module.exports = router;