var BookRepository = require('../../../repository/book-repository');

var book = require('../../../repository/book-models/book');

//var book = new Book();

var bookRepository = new BookRepository(book);

exports.getBook = function(req,res){
	bookRepository.findById(req.params.bookId, function(err, book){
		if(err){
			res.send(err);
		}else{
			res.json(book);
		}

	});
}

exports.getBooks = function(req,res){
	bookRepository.findAll(function(err,books){
		if(err){
			res.send(err);
		}else{
			res.json(books);
		}
	});
}

exports.createBook = function(req,res){
	var book = req.body;

	bookRepository.save(book, function(err, book){
		if(err){
			res.send(err);
		}else{
			res.json({message: 'Beer added to the locker!'});
		}
	});
}

exports.updateBook = function(req,res){
	var id = req.params.bookId;
	var book = req.body;

	bookRepository.update(id, book,function(err,book){
		if(err){
			res.send(err);
		}else{
			res.json(book);
		}
	});
}

exports.deleteBook = function(req,res){
	bookRepository.delete(req.params.bookId, function(err){
		if(err){
			res.send(err);
		}else{
			res.json({ message: 'Beer removed from the locker!' });
		}

	});
}