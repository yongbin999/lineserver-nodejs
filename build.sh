#!/bin/bash

#install node and NPM


# preprocess a sample test file 
echo '\t'running script to preprocess a sample textfile
mkdir -p public/splitFiles/
sh scripts/preprocessFiles.sh 5 10000 ./public/sampleFileLarge.txt public/splitFiles/sampleFileLarge.txt.

echo '\t'finished build

