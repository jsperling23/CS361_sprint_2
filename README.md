**# Travel Warning Reqeust Microservice**

This microservice is contains a program which allows the user to give a two-letter country code and return back a text file containing JSON data of the current US travel warning for a specific country. The text file is by default returned in the same directory in which travelRequest.py, the main file, is saved. Optionally, the user can include the filepath as a parameter to customize the name of the file and the location where it will be placed.

In order to use this microservice, one must call it using a subprocess call. There are two parameters, the country code and the filepath. The country code is a two-letter string that is required in the call, it is the first parameter. Optionally, one can add a string containing the filepath and the name of the text file. The file travelTest.py contains an example call to travelRequest.py. Two examples can be seen below as well:

**Python Example Call**

**Javascript Example Call**
