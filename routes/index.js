var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var posts = require('../models/posts');

var comment = posts.find(function (err, p) { 
		 if (err) return console.error(err);
		 else{
			 var list = p;
			 for ( var i = 0; i < list.length; i++) {
				list[i].title;
			 }
		 }	 
		});	

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header: "Joshua's Blog" });
});

/* GET form submission */
router.post('/', function(req, res) {
	var yolo = new posts({ 'title': req.param('title'), 'content': req.param('body')});
	yolo.save(function (err, yolo) { 
		if (err) return console.error(err);
		else{ 
			res.render('index', {title: yolo.title, comments: yolo.content});
		}
		});
});

module.exports = router;
