import json
import pprint
import time
import googlemaps
import sqlite3
import requests


i = 0
with open('placesDetails.json') as f:
    for line in f:
        placeDict = json.loads(line)
        pprint.pprint(placeDict['result'])
        i = i + 1
        if (i == 10):
            break