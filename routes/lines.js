var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:line', function(req, res, next) {
  res.send('respond with a resource' +req.params.line);
});

module.exports = router;
