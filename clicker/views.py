from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Clicker
import json  

def example (request): 
    return render(request, 'index.html')

def game(request): 
    return render (request, 'game.html')

def board(request): 
    data = Clicker.objects.all().order_by('-score')
    context = {
        "data": data
    }
    return render (request, "leaderboards.html", context)

def save_score(request):
    try:
        # Parse JSON data from request body
        data = json.loads(request.body)
        username = data.get('username')
        score = data.get('score')

        if not username or score is None:
            return JsonResponse({'success': False, 'error': 'Missing username or score'}, status=400)

        try:
            score = int(score)
        except ValueError:
            return JsonResponse({'success': False, 'error': 'Invalid score format'}, status=400)

        # Create a new Clicker instance and save it to the database
        new_data = Clicker(username=username, score=score)
        new_data.save()

        return JsonResponse({'success': True})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)}, status=500)