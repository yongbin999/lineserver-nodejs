#!/bin/bash

#install node and NPM


# preprocess a sample test file 
echo '\t'running script to preprocess a sample textfile
sh scripts/preprocessFiles.sh 1 10000 public/sampleFileLarge.txt public/splitFiles/sampleFileLarge.txt.

echo '\t'finished build

