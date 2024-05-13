[![Django CI/CD](https://github.com/absorian/cryptoclicker/actions/workflows/djangoapp.yml/badge.svg)](https://github.com/absorian/cryptoclicker/actions/workflows/djangoapp.yml)

#### Steps for run locally

1. Clone repo
2. Navigate inside app folder: `cd app`
3. Install dependencies: `pip install -r requirements.txt`
4. Set your values (specific for your running PostgreSQL) inside `cryptoclicker/.env`
5. Migrate: `python manage.py migrate`
6. Run server: `python manage.py runserver`
