var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo app' });
});

// start up message
console.log('The server is ready...')

module.exports = router;
