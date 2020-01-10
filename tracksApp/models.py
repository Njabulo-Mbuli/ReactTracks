from django.db import models

from django.contrib.auth import get_user_model

class Track(models.Model):
    #id is added automatically
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    url = models.URLField()
    createdAt = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(get_user_model(),null=True,on_delete=models.CASCADE)

class Like(models.Model):
    user = models.ForeignKey(get_user_model(),null=True,on_delete=models.CASCADE)
    track = models.ForeignKey('tracksApp.Track',related_name="likes",on_delete=models.CASCADE)