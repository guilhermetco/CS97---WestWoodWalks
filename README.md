# CS97---WestWoodWalks

## Video Demo

```
https://user-images.githubusercontent.com/60904334/111013934-48fe8d00-8356-11eb-8569-b09e319fad2e.mp4


## File Organization

```
Our main two directories are the "WestwoodWalks" and "backend" folders.  

"WestwoodWalks" has all of the frontend (React Native) code; the screens 
folder has the JavaScript code for each of the app's screens and is where 
we used Axios calls to communicate between the frontend and backend. The 
App.js file is the main driver for the app.

"backend" is where all the Django code is.  The most important files here 
are under the subdirector "api".  In models.py, the main objects that our 
app stores in the database are defined: Walks, Businesss, Review and Profile. 
The serializers.py file indicates how our objects should be displayed on 
the backend.  Lastly, views.py determines what data should be returned for 
each object, and how different query parameters should be accepted.
```

## Setting up the backend

```
What you need to have pre-installed to ensure a smooth run:
1) MySQL
    link: https://dev.mysql.com/downloads/windows/installer/8.0.html
2) Python 3

#Linux/Mac users
#Switch into the project folder then run the following commands
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt


#Windows users
python3 -m venv env
.\env\Scripts\activate
pip install -r requirements.txt

Note: It is possible that Windows will not allow for the activate script to run.
In this case follow these steps:
Open PowerShell in administrator mode
Run the command: set-ExecutionPolicy unrestricted
Then run: .\env\Scripts\activate
Run the command: set-ExecutionPolicy restricted

#Switch into the backend folder and start a local server for the backend
cd backend
python manage.py runserver

#This will set up your local django server that will interact with the AWS SQL database in the cloud

```

## Running app locally (frontend)

```
What you need to have installed before:
1) Node.js 
    link to installation: https://nodejs.org/en/download/
2) Expo CLI
    command to install: "npm install -g expo-cli"
3) Xcode Simulator
    - Can be used on IOS devices on Expo Go app but need to change url used in axios requests (see note below)

Once you have those installed:
1) Go to your terminal and enter the WestwoodWalks directory.
2) Run "npm install." This is needed because the node-modules are not uploaded
   to Github since there are so many. This will download all the modules needed.
3) Run "expo start"
4) Once the local host opens, click on the option to run the app on an IOS simulator. This should run the app.
```

## About the problem fetching http requests and running the app on iOS

```
When the program is run on an iOS piece of hardware, such as an iPhone,
the url addresses to the locahost ip in the axios requests will not work
since iOS does not allow apps to fetch http requests, only https. In order
to resolve this issue, there are two ways.

1) Run an iPhone simulator
    For example: Xcode

2) Running ngrok which creates a secure URL (https) to the localhost server
    link: https://ngrok.com/
    
    This method is for those running the app on hardware, not a simulator.
    Once installed, ensure that the folder holding ngrok.exe is on the PATH
    Then, one could call ngrok.exe http 8000 in command prompt
    (we are using port 8000 to run the django backend server)
    This will then generate a https url which will allow iOS to follow through
    on the requests.
    This also means that inside the frontend code, the urls must be changed to contain
    that https url and NOT the url from the django backend server.

```
