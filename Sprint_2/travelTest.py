import subprocess
import json

programPath = 'travelRequest.py'
countryCode = 'EG'
endPath = '/Users/joseph/Downloads/testing.txt'

#Call the program
subprocess.run(['python3', programPath, countryCode, endPath])

#Open file and print to the console
with open(endPath, 'r') as file:
    data = json.load(file)
    print(data)
