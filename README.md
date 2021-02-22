# CS97---WestWoodWalks

## Setting up the backend

```
#Switch into the project folder then run the following commands
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

#Switch into the backend folder and start a local server for the backend
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
