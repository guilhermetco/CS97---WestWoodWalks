# Generated by Django 3.1.3 on 2021-03-04 01:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0008_auto_20210303_1713'),
    ]

    operations = [
        migrations.CreateModel(
            name='Walks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('longitude', models.DecimalField(decimal_places=6, default=0.0, max_digits=9)),
                ('latitude', models.DecimalField(decimal_places=6, default=0.0, max_digits=9)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
