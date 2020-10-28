# Generated by Django 3.1.2 on 2020-10-27 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skin_api', '0003_auto_20201027_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='skincare',
            name='cleanser',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AddField(
            model_name='skincare',
            name='moisturizer',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AddField(
            model_name='skincare',
            name='serum',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AddField(
            model_name='skincare',
            name='sunscreen',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='skincare',
            name='result',
            field=models.CharField(default='', max_length=1000),
        ),
    ]