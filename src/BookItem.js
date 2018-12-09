import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'



const BookItem = ({book, updateBook}) => (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
          style={{ width: 128, height: 193, backgroundImage: 'url({book.imageLinks.thumbnail})' }}></div>
          <BookShelfChanger book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(",")}</div>
      </div>
    </li>
    )
    

export default BookItem;