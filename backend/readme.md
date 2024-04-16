# Para Crear el entorno virtual
python -m venv venv
O también:
virtualenv venv

# Para Activar el entorno virtual
source venv/Scripts/activate

# Para Instalar Django la version LTS (estable)
pip install django==4.2

# Comando para Crear un proyecto con Django
django-admin startproject miproyecto

# Comando para Desplegar un proyecto con Django
cd miproyecto
python manage.py runserver

# Comando para Crear un app (Equivalente a un Blueprint en Flask)
python manage.py startapp web

# Comando para Crear carpeta migrations
python manage.py makemigrations

# Comando para Subir migración
python manage.py migrate

# Comando para Crear un superusuario (Usuario Administrador)
python manage.py createsuperuser