
### Installing
please install npm and nodejs following direction here
https://www.npmjs.com/get-npm

## Build
This will run the preprocessing of a text file into chucks
```
    sh build.sh
```

## Running the app
This will run the nodejs express server on localhost:8080
```
    npm run start
```
or
```
    sh run.sh
```
## Running the tests
```
    npm run test
```
======

### Analysis:
* How does your system work? (if not addressed in comments in source)
..* 
* How will your system perform with a 1 GB file? a 10 GB file? a 100 GB file?
...
* How will your system perform with 100 users? 10000 users? 1000000 users?
...
* What documentation, websites, papers, etc did you consult in doing this assignment?
...
* What third-party libraries or other tools does the system use? How did you choose each library or framework you used?
...
* How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
...
* If you were to critique your code, what would you have to say about it?
..*

======
### References:
* split commandline to split file by number of lines:
https://stackoverflow.com/questions/33444369/splitting-bulk-text-file-every-n-line

* executing commandline with child_process:
https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback

* readline with sed efficently:
https://www.gnu.org/software/sed/manual/sed.html
https://stackoverflow.com/questions/6022384/bash-tool-to-get-nth-line-from-a-file
http://sharadchhetri.com/2014/08/08/print-particular-line-number-using-sed-command/

* get linenumber along with sed:
https://stackoverflow.com/questions/10577256/numbering-lines-matching-the-pattern-using-sed

* writing unit test with mocha:
https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/

* sample text files:
http://www.gutenberg.org/



### Authors
* **Yong Liang** 