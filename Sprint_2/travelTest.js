const { spawnSync } = require('child_process');
const fs = require('fs');

const programPath = 'travelRequest.py';
const countryCode = 'EG';
const endPath = '/Users/joseph/Downloads/testing.txt';

//Call the proram
spawnSync('python3', [programPath, countryCode, endPath]);

//Open text file and write to console
const file = fs.readFileSync(endPath);
const data = JSON.parse(file);
console.log(data);
