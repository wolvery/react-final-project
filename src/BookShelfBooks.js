import React from 'react'
import BookItem from './BookItem.js'



const BookShelfBooks = ({ books, updateBook}) => (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (<BookItem key={book.id} book={book} updateBook={updateBook} />))}
        </ol>
      </div>
      );


export BookShelfBooks;