var request = require('supertest');
var express = require('express');

var app = require("../app.js");
describe('routes api', function(){
	describe('get /', function(){
		it('ok test', function(){
			request(app).get('/housekeepinglog/').expect(200, function(err){
				console.log(err);
			});
		});
	});
});
