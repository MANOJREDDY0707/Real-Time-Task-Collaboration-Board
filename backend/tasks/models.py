from django.db import models
from boards.models import Board
from django.conf import settings

User = settings.AUTH_USER_MODEL

class List(models.Model):
    title = models.CharField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    position = models.IntegerField()

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    position = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
