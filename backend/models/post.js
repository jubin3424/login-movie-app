var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    description: String,
    created_at: Date,
    written_by: String
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;