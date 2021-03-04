# Generated by Django 3.1.3 on 2021-03-03 23:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_review'),
    ]

    operations = [
        migrations.CreateModel(
            name='Walks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('long', models.DecimalField(decimal_places=3, max_digits=8)),
                ('lat', models.DecimalField(decimal_places=3, max_digits=8)),
            ],
        ),
        migrations.AlterField(
            model_name='review',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review', to=settings.AUTH_USER_MODEL),
        ),
    ]
