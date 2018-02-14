var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var path = require('path');

/* GET users listing. */
router.get('/:line', function(req, res, next) {
  //res.send('respond with a resource' +req.params.line);
  //var filename = "/sampleFileLarge.txt"
  var filename = path.join( 'public', "sampleFileSmall.txt")
  var line =parseInt(req.params.line)
  if(!line || line <=0 ){
  	return res.status(400).send("Bad input");
  }

  findLine(line, filename)
  	.then((resp) =>{
  		console.log(resp)
  		if(resp.stderr){
  			console.error(`stderr: ${resp.stderr}`);
			return res.status(500).send("Unable to process your request.");
		}else{
			if(!resp.stdout){
				return res.status(413).send();
			}
			var lineNumber = resp.stdout.substr(0,resp.stdout.indexOf('\n'));
			var lineContent = resp.stdout.substr(resp.stdout.indexOf('\n')+1);
	  		res.status(200).send(lineContent);
		}
  	})
  	.catch(err =>{
	    console.error(err)
	    return res.status(500).send("Unable to process your request.");
  	});
});

async function findLine(line, filename) {  
	//return exec('sed -n 1p ./public/sampleFileSmall.txt');
	return exec("sed '"+line+"{=;q};d' "+ filename);
}
async function getLineSize(line, filename) {  
	//return exec('sed -n 1p ./public/sampleFileSmall.txt');
	return exec("wc -l ./public/sampleFileSmall.txt | awk '{print $1}'");
}


module.exports = router;
