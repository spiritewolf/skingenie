from django.db import models

class SkinCare(models.Model):
    cleanser = models.JSONField(max_length=800, default='')
    moisturizer = models.JSONField(max_length=800, default='')
    serum = models.JSONField(max_length=800, default='')
    sunscreen = models.JSONField(max_length=800, default='')
    name = models.CharField(max_length=800, default='')
    details = models.CharField(max_length=800, default='')
