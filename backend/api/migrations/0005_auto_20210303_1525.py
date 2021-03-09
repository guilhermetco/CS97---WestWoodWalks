# Generated by Django 3.1.3 on 2021-03-03 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210303_1514'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='business',
        ),
        migrations.AddField(
            model_name='business',
            name='reviews',
            field=models.ManyToManyField(related_name='reviews', to='api.Review'),
        ),
    ]