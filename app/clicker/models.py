from django.db import models

# Create your models here.


class Clicker(models.Model): 
    username = models.CharField(max_length=300)
    score = models.IntegerField()
    # class Meta: 
    #     db_table = 'Crypto_clicker'