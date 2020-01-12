'use strict';
 
const fs = require('fs');
 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
 
    main();
});
 
function readLine() {
    return inputString[currentLine++];
}
 
function main() {
    let t = parseInt(readLine(), 10);
    let i, h, m;
    
    for(i=1; i<=t; i++) {
        let inputs = readLine();
        inputs = inputs.split(' ');
        h = parseInt(inputs[0], 10);
        m = parseInt(inputs[1], 10);
        
        let totalMin = (23-h)*60 + 60-m;
        console.log(totalMin);
    }
}