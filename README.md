
### Installing
please install npm and nodejs following direction here
https://www.npmjs.com/get-npm

## Build
This will run the preprocessing of a text file into chucks
```
    sh build.sh
```

## Running the app
This will run the nodejs express server on localhost:3000
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
---

### Analysis:
* How does your system work? (if not addressed in comments in source)
> * The main logic of this line server app is to first split the file into chunks by predetermined number of lines. When we get the request line number, we can do some math to figure out the filename location, and then find the line in that chucked file with the mod-line number.

* How will your system perform with a 1 GB file? a 10 GB file? a 100 GB file?
> * Runtime: O(n) where n is the line-size of the chuck block
> * Storage: O(2n) where n is the size of the text files
> * File size will not impact the system runtime performance, as long as we have enough storage for these splited files. The line splitting creates an skip index with O(1) search. Then we can read through the chuck to find the line O(n). 

* How will your system perform with 100 users? 10000 users? 1000000 users?
> * The findLine() function is writen in async promise, which is nonblock and will respond to request once result is found.
> * The sed command line to find the line uses buffer memory, so only the specific line will be loaded during processing.
> * Nodejs provide asyn nonblocking server implementation. The load and concurrency of user requests will depend of the server memory and number of instances of the server. 

* What documentation, websites, papers, etc did you consult in doing this assignment?
> * I've used the library documentations and online discussion boards listed in the reference below. 

* What third-party libraries or other tools does the system use? How did you choose each library or framework you used?
> * nodejs' express server to quickly setup the http api service. 
> * mocha and supertest for some quick route testing.
> * commandline scripts: sed and split are native to most linux machines, and already optimized for performance. 

* How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
> * I've spend about 3 hours research and designing, 5 hours coding/testing/reviewing the solution.
> * I've have more time, I would do more error handing in the functions and scripts to check for overflows and other corner cases. 
> * We can improve performance of this implmentation with caching. Since the file is static, the most frequent lines can be served without calling the processing script each time.
> * I would package the solution in docker container, so docker will be the only software needed to run the app. 
> * The prioritization depends on what has the most impact to the end user. If end user are concern with security for example, then we can work on auth servic like JWT.

* If you were to critique your code, what would you have to say about it?
> * The solution uses a lot of storage. 
> * It will take some time to preprocess the text files when it is big. 
> * The error handling might not cover all cases. 

---
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