var express = require('express');
var router  = express.Router();

/* GET user-agent */
router.get('/', function(req, res) {
  res.json({
    'get': ''

  });
});

module.exports = router;
