import React from 'react'
import BookItem from './BookItem.js'



const BookGrid = ({ books, updateBook}) => (
      
        <ol className="books-grid">
          {books.map(book => (<BookItem key={book.id} book={book} updateBook={updateBook} />))}
        </ol>
      
      );


export default BookGrid;