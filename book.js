var mongoose = require('mongoose');

var BookSchema   = new mongoose.Schema({
  	title: { type: String, required: true },
  	authorId: { type: String, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('Book', BookSchema);