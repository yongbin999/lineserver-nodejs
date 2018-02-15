#!/bin/bash

NUMLIMIT=$1
SPLITEVERY=$2
FILEINPUT=$3
FILEOUTPUT=$4

echo '\t'spliting largeinput files to chunks
split -a $NUMLIMIT -d -l $SPLITEVERY $FILEINPUT $FILEOUTPUT
echo '\t'split completed
