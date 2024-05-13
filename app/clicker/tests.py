from django.test import TestCase
from django.utils import timezone
from clicker.models import Clicker
from django.urls import reverse


class ClickerTest(TestCase):

    def create_entry(self, username="test", score=123):
        return Clicker.objects.create(username=username, score=score)

    def test_creation(self):
        c = self.create_entry()
        self.assertTrue(isinstance(c, Clicker))
        self.assertEqual("test", c.username)
        self.assertEqual(123, c.score)

    def test_leaderboardView(self):
        c = self.create_entry()
        url = reverse("board")
        resp = self.client.get(url)

        self.assertEqual(resp.status_code, 200)
        self.assertIn(c.username, resp.content.decode())