# Generated by Django 3.1.2 on 2020-10-27 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skin_api', '0002_auto_20201026_2142'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skincare',
            name='result',
            field=models.TextField(),
        ),
    ]
