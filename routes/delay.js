var express = require('express');
var router  = express.Router();
var url = require('url');

router.get('/:n/', function(req, res) {
    var delay = parseInt(req.params.n);

    if (!isInt(delay)) {
      res.status(400).text('')
    }
  else{

    setTimeout(function() {

      res.status(200).json({
        query: req.query,
        form: req.form,
        headers: req.headers,
        origin: req.headers.origin,
        url: url.format({
          protocol: req.protocol,
          host: req.get('host'),
          pathname: req.originalUrl
        })
      });
    }, delay * 1000);
	}
});

function isInt(value){
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

module.exports = router;
