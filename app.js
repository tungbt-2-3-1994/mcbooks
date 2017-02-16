var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var bookController = require('./api/controllers/book-controller');
// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/mcbooks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var router = express.Router();

router.route('/books')
	.get(bookController.getBooks)
	.post(bookController.createBook);
router.route('/books/:bookId')
	.get(bookController.getBook)
	.put(bookController.updateBook)
	.delete(bookController.deleteBook);
app.use('/api', router);

var port = 3000;
app.listen(port, function(){
    console.log("server is listening on port: ", port);
});
