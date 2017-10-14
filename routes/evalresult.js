var express = require('express');
var bodyParser = require('body-parser').json();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('evalresult',{title: 'newtest'});
});

router.post('/123', function(req, res, next){
	console.log('Request is : '+req.body);
	var reqbody = req.body.title;
	console.log('Request is **: '+reqbody.body);
   // reqbody = reqbody.replace('OR','||');
	console.log('**Request is **: '+reqbody.body);
	var testvar = eval(reqbody);

	console.log('**jsonarraylength**'+testvar.length);

	for(var i in testvar){

		var evalstring = testvar[i].validationEvalString;
		var evalstringres = eval(evalstring);
		console.log('**Loop value is**'+evalstring);
		console.log('**Loop value res is**'+evalstringres);
		testvar[i].validationEvalResult=evalstringres;
	}
	
	res.status(200).send(testvar);
});
module.exports = router;
