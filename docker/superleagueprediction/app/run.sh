#echo "Make Migrations"
#
#echo "Migrate"
#python /usr/src/app/manage.py migrate

echo "Runing server"
#python /usr/src/app/manage.py runserver 0.0.0.0:8000
gunicorn predictsuperleague.wsgi:application --timeout 10 --reload -w 2 --env SCRIPT_NAME=/api -b :8000