const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const BlogSpot = mongoose.model('BlogSpot', 'BlogSpotSchema');

module.exports = BlogSpot