# Generated by Django 3.1.3 on 2021-03-03 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210303_1525'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='reviews',
            field=models.ManyToManyField(to='api.Review'),
        ),
    ]
