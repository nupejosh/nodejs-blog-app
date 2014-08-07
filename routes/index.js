var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var posts = require('../models/posts');

//fs.readdirSync(__dirname + '../models').forEach(function (filename) { 
	//	if (~filename.indexOf('.js')) require(__dirname + '/models' + filename) 
//		});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res) {
	var yolo = new posts({ 'title': req.param('body')});
	yolo.save(function (err, yolo) { 
		if (err) return console.error(err);
	});
});

module.exports = router;
