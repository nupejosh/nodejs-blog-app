var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	date: { type: Date, default: Date.now}, 
	title: String, 
	content: String,
});

var posts = mongoose.model('posts', postsSchema); 
module.exports = posts;
