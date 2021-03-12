# CS97---WestWoodWalks

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

Once you have those installed:
1) Go to your terminal and enter the WestwoodWalks directory.
2) Run "npm install." This is needed because the node-modules are not uploaded
   to Github since there are so many. This will download all the modules needed.
3) Run "expo start"
4) This should run the app  
    - I recommend downloading the Expo Go App so you can view the
      app on your phone. You just need to scan the QR code.
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
