var express = require("express");
var router = express.Router();
const util = require("util");
const exec = util.promisify(require("child_process").exec);
var path = require("path");

var postfixDigits = 5; //posible overflow
var splitNumber = 10000;
var fileName = "sampleFileLarge.txt"

/* GET users listing. */
router.get("/:line", function (req, res, next) {
  var line = parseInt(req.params.line);
  if (!line || line <= 0) {
    return res.status(400).send("Bad input");
  }
  //res.send('respond with a resource' +req.params.line);
  //var filename = "/sampleFileLarge.txt"
  var file_numberPostfix = Math.floor(line / splitNumber);
  file_numberPostfix = ("0".repeat(postfixDigits) + file_numberPostfix).slice(-postfixDigits)
  //console.log(file_numberPostfix);
  
  mod_lineNumber = line % splitNumber
  var fileLocation = path.join("public/splitFiles", fileName + "." + file_numberPostfix);
  
  findLine(mod_lineNumber, fileLocation)
    .then(resp => {
      //console.log(resp);
      if (resp.stderr) {
        console.error(`stderr: ${resp.stderr}`);
        return res.status(500).send("Unable to process your request.");
      } else {
        if (!resp.stdout) {
          return res.status(413).send("The requested line is out of bound");
        }
        var lineNumber = resp.stdout.substr(0, resp.stdout.indexOf("\n"));
        var lineContent = resp.stdout.substr(resp.stdout.indexOf("\n") + 1);
        res.status(200).send(lineContent);
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send("Unable to process your request.");
    });
});

async function findLine(line, filename) {
  //return exec('sed -n 1p ./public/sampleFileSmall.txt');
  return exec("sed '" + line + "{=;q};d' " + filename);
}
async function getLineSize(line, filename) {
  //return exec('sed -n 1p ./public/sampleFileSmall.txt');
  return exec("wc -l ./public/sampleFileSmall.txt | awk '{print $1}'");
}

module.exports = router;
