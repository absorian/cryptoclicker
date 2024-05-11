from django.urls import path 
from . import views 

urlpatterns = [
    path ('', views.example, name = "example"), 
    path ('game/', views.game, name = "game"), 
    path ('leaderboards/', views.board, name = "board"), 
    path('save-score/', views.save_score, name='save_score'),

]