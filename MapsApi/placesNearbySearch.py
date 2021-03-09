import googlemaps
import pprint
import time
import json
#import sqlite3


"""
place nearby searches

"""

file1 = open('placesNearbyData.txt', 'a')

API_KEY = 'AIzaSyB0x1Hj67PTz8wwBWZ7gbesVxQiuTOq1lA'

gmaps = googlemaps.Client(key = API_KEY)

places_result = gmaps.places_nearby(location= '34.061248, -118.434503', radius = 184)

pprint.pprint(places_result)

file1.write(json.dumps(places_result))

time.sleep(3)

places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])

pprint.pprint(places_result)

file1.write(json.dumps(places_result))

time.sleep(3)

places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])

pprint.pprint(places_result)

file1.write(json.dumps(places_result))



for num in range(1):
    
    if (num != 0):

        time.sleep(3)

        places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])

    for place in places_result['results']:

        my_place_id = place['place_id']

        my_fields = ['name', 'formatted_phone_number', 'type']

        place_details = gmaps.place(place_id = my_place_id, fields = my_fields)

        print(place_details)
    
