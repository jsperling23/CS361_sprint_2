const { spawnSync } = require('child_process');

const programPath = 'travelRequest.py'
const countryCode = 'EG'
const endPath = '/Users/joseph/Downloads/testing.txt'

spawnSync('python3', [programPath, countryCode, endPath]);
    