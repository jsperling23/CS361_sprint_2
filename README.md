**Travel Warning Request Microservice**

This microservice is contains a program which allows the user to give a two-letter country code and return back a text file containing JSON data of the current US travel warning for a specific country. The text file is by default returned in the same directory in which travelRequest.py, the main file, is saved. Optionally, the user can include the filepath as a parameter to customize the name of the file and the location where it will be placed.

In order to use this microservice, one must call it using a subprocess call. There are two parameters, the country code and the filepath. The country code is a two-letter string that is required in the call, it is the first parameter. Optionally, one can add a string containing the filepath and the name of the text file. The files travelTest.py and travelTest.js contains an example call to travelRequest.py along with examples of opening and printing the microservices output data from the text file. The library in Python for subprocess calls is called 'subprocess' and the library in JavaScript is called 'child_process'. An example in each language can be also be seen below:


**Python Example Call**
```
import subprocess

programPath = 'travelRequest.py'
countryCode = 'EG'
endPath = '/Users/joseph/Downloads/testing.txt'
subprocess.run(['python3', programPath, countryCode, endPath])
```

**Javascript Example Call**
```
const { spawnSync } = require('child_process');

const programPath = 'travelRequest.py'
const countryCode = 'EG'
const endPath = '/Users/joseph/Downloads/testing.txt'

spawnSync('python3', [programPath, countryCode, endPath]);
```

**UML Diagram**

<img width="482" alt="Screenshot 2024-02-22 at 5 53 45 PM" src="https://github.com/jsperling23/CS361_sprint_2/assets/95095370/4afcb306-9ede-4e15-9689-959e6cf0b5f7">
