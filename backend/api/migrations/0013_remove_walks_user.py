# Generated by Django 3.1.3 on 2021-03-08 07:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20210307_2257'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='walks',
            name='user',
        ),
    ]
