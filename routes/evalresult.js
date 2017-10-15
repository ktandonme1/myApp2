var express = require('express');
var bodyParser = require('body-parser').json();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('evalresult',{title: 'newtest'});
});

router.post('/123', function(req, res, next){
	console.log(req.body);
	var reqbody = (req.body.title).toString();
	reqbody = reqbody.replace(/OR/g,'||').replace(/AND/g,'&&');
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
