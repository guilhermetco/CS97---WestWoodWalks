from django.contrib import admin

# Register your models here.
from .models import Choice, Question


class ChoiceInline(admin.TabularInline):     #StackedInline):
    model = Choice
    extra = 3

# Default style
#
# admin.site.register(Question)

# configured style for this page
#class QuestionAdmin(admin.ModelAdmin):
#    fields = ['pub_date', 'question_text']

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Question Information', {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'],
        'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    
#    inlines = [admin.TabularInline]   

admin.site.register(Question, QuestionAdmin)