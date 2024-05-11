[![Django CI/CD](https://github.com/absorian/cryptoclicker/actions/workflows/djangoapp.yml/badge.svg)](https://github.com/absorian/cryptoclicker/actions/workflows/djangoapp.yml)

#### Steps for run locally

1. Clone repo
2. Navigate inside app folder: `cd app`
3. Set your values (specific for your running PostgreSQL) inside `cryptoclicker/.env`
4. Migrate: `python manage.py migrate`
5. Run server: `python manage.py runserver`
