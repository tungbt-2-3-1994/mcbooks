var BookRepository = function(Book) {
	this.Book = Book;
}

BookRepository.prototype.findById = function(id, callback){
	this.Book.findById(id,function(err,result){
		if(err) 
			callback(err,null);
		callback(null,result);
	});
}

BookRepository.prototype.findAll = function(callback){
	this.Book.find(function(err,result){
		if(err)
			callback(err,null);
		callback(null,result);
	});
}

BookRepository.prototype.save = function(book, callback){
	this.Book.create(book,function(err,book){
		if(err)
			callback(err,null);
		callback(null,book);
	});
}

BookRepository.prototype.update = function(id, book,callback){
	this.Book.update({_id : id},{title:book.title},function(err,book){
		if(err)
			callback(err,null);
		callback(null,book);
	});
	console.log(book.title);
}

BookRepository.prototype.delete = function(id,callback){
	this.Book.remove({_id:id},function(err,result){
		if(err)
			callback(err);
		callback(result);
	});
}

module.exports = BookRepository;