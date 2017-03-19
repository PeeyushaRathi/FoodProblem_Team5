var express = require('express');
console.log('hey peeyusha');

var server = new express();

server.get('/', function(req,res){
	res.send('hello you')
})

server.get('/search', function(req,res){
	res.send('welcome to search page')
	})

server.listen(8000,function(){
	console.log('Listening')
})
