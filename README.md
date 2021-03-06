# CS97---WestWoodWalks

## Setting up the backend

```
What you need to have installed to ensure a smooth run:
MySQL
	link: https://dev.mysql.com/downloads/windows/installer/8.0.html
Python 3

#Switch into the project folder then run the following commands
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

#if you are using windows use these commands instead
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
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

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
