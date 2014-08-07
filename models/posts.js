var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	date: Date 
	title: String, 
	content: String,
	comments: [{
		date: Date, 
		content: String,
	}]
});

mongoose.model('posts', postsSchema); 
