from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

class Player(AbstractUser):
    is_active = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    register_date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.name + self.surname
