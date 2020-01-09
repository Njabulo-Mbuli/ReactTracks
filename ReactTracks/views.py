from django.http import HttpResponse

def hello(response):
	return HttpResponse('Hello World')
