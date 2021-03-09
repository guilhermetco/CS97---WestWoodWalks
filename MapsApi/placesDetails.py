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

"""dictionary to match model format on server"""
testPost = {
  "name": "ohno",
  "category": "",
  "address": "",
  "website": "",
  "reviews": [],
  "lng": 0,
  "lat": 0,
}

#requests.delete('http://127.0.0.1:8000/business/1613')

# i = 68
# for num in range(1543):
#   url = 'http://127.0.0.1:8000/business/' + str(i) + '/'
#   i = i+1
#   requests.delete(url)

# data = []
# url = 'http://127.0.0.1:8000/business/'

"""
populating database with business data
"""

fixture = []
i = 0
with open('placesDetails.json') as f:
    for line in f:
      # if (i==5):
      #   break
      testPost["name"] = ""
      testPost["category"] = ""
      testPost["address"] = ""
      testPost["website"] = ""
      testPost["reviews"] = []
      testPost["lng"] = 0
      testPost["lat"] = 0

      placeDict = json.loads(line)
      try:
        testPost["name"] = placeDict["result"]["name"]
      except:
        print("no name")

      try:
        testPost["category"] = placeDict["result"]["types"][0]
      except:
        print("no category")

      try:
        testPost["address"] = placeDict["result"]["formatted_address"]
      except:
        print("no address")

      try:
        testPost["website"] = placeDict["result"]["website"]
      except:
        print("no website")

      try:
        vert = placeDict["result"]["geometry"]["location"]["lng"]
        formatted_string = "{:.7f}".format(vert)
        float_vert = float(formatted_string)
        testPost["lng"] = float_vert
      except:
        print("no lng")

      try:
        horiz = placeDict["result"]["geometry"]["location"]["lat"]
        formatted_string = "{:.7f}".format(horiz)
        float_horiz = float(formatted_string)
        testPost["lat"] = float_horiz
      except:
        print("no lat")
      #pprint.pprint(testPost)
      #requests.post(url, data = testPost)
      fixture.append(testPost.copy())
      # i= i + 1

fixtureFile = open('load_businesses.json', 'a')

i=0
for item in fixture:
  fixtureFile.write(json.dumps(fixture[i]))
  fixtureFile.write(',')
  fixtureFile.write('\n')
  i=i+1


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

"""iterating through each place and running place_details request. Each returned json object added to placesDetails.json """
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



