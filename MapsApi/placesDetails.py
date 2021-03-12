import json
import pprint
import time
import googlemaps
import sqlite3
import requests

"""
experimenting with sqlite3
"""

# conn = sqlite3.connect('trial.db')

# c = conn.cursor()

# Create table
# c.execute('''CREATE TABLE stocks
#              (date text, trans text, symbol text, qty real, price real)''')

# Insert a row of data
# c.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

# Save (commit) the changes
# conn.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
# conn.close()




#file1 = open('placesNames.txt', 'a')

"""dictionaries to match model format on server"""
testPost = {
  "name": "",
  "category": "",
  "address": "",
  "website": "",
  "reviews": [],
  "lng": 0,
  "lat": 0,
  "rating": 0,
  "id": 0
}

testWalk = {
  "coordinates" : {
    "id": 27,
    "token": "5258e62251e3a36c333ccfc2bb33e9222e711fd7"
},
  "profile" : [3],
  "name" : "bob",
  "description" : "this is a test"
}

"""Testing posts and delete requests to server"""

requests.delete('http://127.0.0.1:8000/walks/19')

#requests.post('http://127.0.0.1:8000/walks/', data = testWalk)

# url = 'http://127.0.0.1:8000/business/19'
# requests.delete(url)

# data = []
# url = 'http://127.0.0.1:8000/business/'



"""
Populating database with business data.
For each place details response in placesDetails.json, I set up the testPost dictionary to receive
pertinent data for the database. Then I used a series of try/except statements to put data from the json
into testPost.  Finally I used the Python requests library to send a post request with the testPost data
to our server.
"""

# fixture = []
# i = 0
# with open('placesDetails.json') as f:
#     for line in f:
#       # if (i==40):
#       #    break
#       testPost["name"] = ""
#       testPost["category"] = ""
#       testPost["address"] = ""
#       testPost["website"] = ""
#       testPost["reviews"] = []
#       testPost["lng"] = 0
#       testPost["lat"] = 0
#       testPost["rating"] = 0
#       testPost["id"] = i

#       placeDict = json.loads(line)
#       try:
#         testPost["name"] = placeDict["result"]["name"]
#       except:
#         print("no name")

#       try:
#         cat = placeDict["result"]["types"][0]
#         newCat = convertCategories(cat)
#         testPost["category"] = newCat
#       except:
#         print("no category")

#       try:
#         testPost["address"] = placeDict["result"]["formatted_address"]
#       except:
#         print("no address")

#       try:
#         testPost["website"] = placeDict["result"]["website"]
#       except:
#         print("no website")

#       try:
#         vert = placeDict["result"]["geometry"]["location"]["lng"]
#         formatted_string = "{:.7f}".format(vert)
#         float_vert = float(formatted_string)
#         testPost["lng"] = float_vert
#       except:
#         print("no lng")

#       try:
#         horiz = placeDict["result"]["geometry"]["location"]["lat"]
#         formatted_string = "{:.7f}".format(horiz)
#         float_horiz = float(formatted_string)
#         testPost["lat"] = float_horiz
#       except:
#         print("no lat")
#       # pprint.pprint(testPost['category'])
#       requests.post(url, data = testPost)
#       # fixture.append(testPost.copy())
#       i= i + 1

""" function to simplify categories down to 8 buckets to match categories buttons on frontend """
def convertCategories(oldCat):
  newCat = ''
  if (oldCat == 'transit_station' or oldCat == 'car_repair' or oldCat == 'bus_station' or oldCat == 'gas_station' or oldCat == 'car_wash' or oldCat == 'parking' or oldCat == 'car_rental' or oldCat == 'travel_agency' or oldCat == 'car_dealer'):
    newCat = 'transportation'
  elif (oldCat == 'doctor' or oldCat == 'health' or oldCat == 'gym' or oldCat == 'physiotherapist' or oldCat == 'veterinary_care' or oldCat == 'dentist' or oldCat == 'drugstore' or oldCat == 'pharmacy' or oldCat == 'hospital'):
    newCat = 'health'
  elif (oldCat == 'finance' or oldCat == 'accounting' or oldCat == 'real_estate_agency' or oldCat == 'bank' or oldCat == 'insurance_agency' or oldCat == 'atm'):
    newCat = 'finance'
  elif (oldCat == 'restaurant' or oldCat == 'cafe' or oldCat == 'bakery' or oldCat == 'food' or oldCat == 'meal_takeaway' or oldCat == 'bar' or oldCat == 'meal_delivery' or oldCat == 'liquor_store' or oldCat == 'grocery_or_supermarket'):
    newCat = 'food'
  elif (oldCat == 'school' or oldCat == 'secondary_school' or oldCat == 'university' or oldCat == 'primary_school'):
    newCat = 'education'
  elif (oldCat == 'lodging' or oldCat == 'electronics_store' or oldCat == 'home_goods_store' or oldCat == 'florist' or oldCat == 'clothing_store' or oldCat == 'furniture_store' or oldCat == 'book_store' or oldCat == 'jewelery_store' or oldCat == 'shoe_store' or oldCat == 'store' or oldCat == 'convenience_store' or oldCat == 'department_store'):
    newCat = 'retail'
  elif (oldCat == 'general_contractor' or oldCat == 'beauty_salon' or oldCat == 'spa' or oldCat == 'lawyer' or oldCat == 'electrician' or oldCat == 'laundry' or oldCat == 'plumber' or oldCat == 'painter' or oldCat == 'hair_care'):
    newCat = 'service'
  else:
    newCat = 'miscellaneous'
  
  return newCat

"""
Used loop from above to put all the server-ready data into a list and then wrote each of these items
into the businesses_fixtures.json.  I didn't end up using fixtures (a Django feature) to load the data
however since Python requests worked fine.
"""
# fixtureFile = open('businesses_fixture.json', 'a')

# i=0
# for item in fixture:
#   fixtureFile.write(json.dumps(fixture[i]))
#   fixtureFile.write(',')
#   fixtureFile.write('\n')
#   i=i+1

"""Getting all the business names into a file"""
# i = 0
# for item in data:
#     if (i > 1767):
#         file1.write(item['result']['name'])
#         file1.write('\n')
#     i = i + 1
# print(i)





# file1 = open('placesDetails.json', 'a')

# API_KEY = 'AIzaSyB0x1Hj67PTz8wwBWZ7gbesVxQiuTOq1lA'

# gmaps = googlemaps.Client(key = API_KEY)

"""putting places_nearby data into list  """
# i = 0
# data = []
# with open('place_ids.json') as f:
#     for line in f:
#         data.append(json.loads(line))
#         i = i + 1
# print(i)

"""iterating through each place in list and running place_details request. Each returned json object added to placesDetails.json.
my_fields indicates the fields I wanted returned in the places details response. """
# k = 0
# for item in data:
#         chunk = item['results']
#         for place in chunk:
#             my_place_id = place['place_id']
#             my_fields = ['address_component', 'adr_address', 'business_status', 'formatted_address', 'geometry', 'icon', 'name', 'photo', 'plus_code', 'type', 'url', 'utc_offset', 
#             'vicinity', 'formatted_phone_number', 'international_phone_number', 'opening_hours', 'website']
#             place_details = gmaps.place(place_id = my_place_id, fields = my_fields)
#             file1.write(json.dumps(place_details))
#             file1.write('\n')
#             k = k + 1
# print(k)



 