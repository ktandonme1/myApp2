var express = require('express');
var bodyParser = require('body-parser').json();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('evalresult',{title: 'newtest'});
});

router.post('/123', function(req, res, next){
	console.log(req.body);
	var evalstring = req.body.title;
	console.log('**evalstring**'+evalstring);
	console.log('**evalresult**'+eval(evalstring));

	res.status(200).send(req.body);
});
module.exports = router;
