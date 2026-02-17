from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Board(models.Model):
    title = models.CharField(max_length=200)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
