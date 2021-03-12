import googlemaps
import pprint
import time
import json
#import sqlite3


"""
places nearby searches

"""

file1 = open('placesNearbyData.txt', 'a')

API_KEY = 'AIzaSyB0x1Hj67PTz8wwBWZ7gbesVxQiuTOq1lA'

gmaps = googlemaps.Client(key = API_KEY)

"""
Since places_nearby searches return places within a certain radius, I filled up Westwood with circles
(see circlMap.txt link) and used the coordinates/radius from those circles to run my searches.
"""
places_result = gmaps.places_nearby(location= '34.061248, -118.434503', radius = 184)

pprint.pprint(places_result)

"""Used json dumps to convert data to json string and append to placesNearbyData.txt. 
After waiting 3 seconds for search/write to finish, I got the next page of the response
and wrote those results to placesNearbyData.txt.  Each coordinate pair and radius corresponded
to a max of 3 pages of data with 20 places each (60 total)."""

file1.write(json.dumps(places_result))

time.sleep(3)

places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])

pprint.pprint(places_result)

file1.write(json.dumps(places_result))

time.sleep(3)

places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])

pprint.pprint(places_result)

file1.write(json.dumps(places_result))


"""Testing the places details request"""
# for num in range(3):
    
#     if (num != 0):

#         time.sleep(3)

#         places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])

#     for place in places_result['results']:

#         my_place_id = place['place_id']

#         my_fields = ['name', 'formatted_phone_number', 'type']

#         place_details = gmaps.place(place_id = my_place_id, fields = my_fields)

#         print(place_details)
    
