var bookController = require('../controllers/book-controller');

module.exports = function(app) {
	app.route('books/:bookId')
		.get(bookController.getBook)
		.put(bookController.updateBook);

	app.get('/books',bookController.getBooks)
		.post(bookController.createBook);
}