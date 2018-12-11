import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'



const BookItem = ({book, updateBook}) => {
 
  const styleBook={width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={styleBook}></div>
          <BookShelfChanger book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors instanceof Array ? book.authors.join(",") : book.authors}</div>
      </div>
    </li>
    )
}

export default BookItem;