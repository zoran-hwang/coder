var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
module.exports=function(app){
	app.get('/', function(req, res) {
		res.render('p_index');
	});
	app.get('/p_recruit', function(req, res) {
		res.render('p_recruit');
	});
	app.get('/p_forum', function(req, res) {
		res.render('p_forum');
	});
	app.get('/p_login', function(req, res) {
		res.render('p_login');
	});
	app.get('/c_login', function(req, res) {
		res.render('c_login');
	});
	app.get('/p_sign', function(req, res) {
		res.render('p_sign');
	});
	
	app.get('/p_info', function(req, res) {
		res.render('p_info');
	});
}

