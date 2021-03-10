import json
import pprint
import time
import googlemaps
import sqlite3
import requests
from collections import Counter

# i = 0
# with open('placesDetails.json') as f:
#     for line in f:
#         placeDict = json.loads(line)
#         pprint.pprint(placeDict['result'])
#         i = i + 1
#         if (i == 10):
#             break

catsFile = open('MapsApi/types0.txt', 'r')

# i = 0
# with open('placesDetails.json') as f:
#     for line in f:
#         placeDict = json.loads(line)
#         #pprint.pprint(placeDict['result']['types'][0])
#         catsFile.write(placeDict['result']['types'][1] + '\n')
#         i = i + 1
#         # if (i == 100):
#         #     break

catsList = []

i=0
for line in catsFile:
    cat = line.rstrip()
    catsList.append(cat)

counts = (Counter(catsList))

catsCount = open('MapsApi/typesCount.txt', 'a')

for key, value in counts.items():
    catsCount.write('%s %s\n' % (key, value))