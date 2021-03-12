import json
import pprint
import time
import googlemaps
import sqlite3
import requests
from collections import Counter

"""
Initially I put all of the business types into text files.
"""
catsFile = open('MapsApi/types0.txt', 'r')

# i = 0
# with open('placesDetails.json') as f:
#     for line in f:
#         placeDict = json.loads(line)
#         #pprint.pprint(placeDict['result']['types'][0])
#         catsFile.write(placeDict['result']['types'][0] + '\n')
#         i = i + 1
#         # if (i == 100):
#         #     break

"""
Used Counter to figure out the distribution of the business types and put results into typesCount.txt
"""
catsList = []

i=0
for line in catsFile:
    cat = line.rstrip()
    catsList.append(cat)

counts = (Counter(catsList))

catsCount = open('MapsApi/typesCount.txt', 'a')

for key, value in counts.items():
    catsCount.write('%s %s\n' % (key, value))