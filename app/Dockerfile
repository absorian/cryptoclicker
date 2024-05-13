FROM python:3.12

WORKDIR /usr/src/app

COPY ./requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./ ./

EXPOSE 8000

# Run
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]