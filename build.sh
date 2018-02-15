#!/bin/bash

#install node modules
npm run install


# preprocess a sample test file 
mkdir -p public/splitFiles/
sh scripts/preprocessFiles.sh 5 10000 ./public/sampleFileLarge.txt public/splitFiles/sampleFileLarge.txt.

echo '\t'finished build

