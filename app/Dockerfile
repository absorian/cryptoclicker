FROM python:3.12

WORKDIR /app

COPY ./requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./ /check

EXPOSE 8000

# Run
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]