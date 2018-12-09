import React from 'react'
import BookGrid from './BookGrid.js'

const camel2title = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

const BookShelf = ({shelf,books,updateBook}) => 
    ( <div className="bookshelf" >
        <h2 className="bookshelf-title" > {camel2title(shelf)} </h2> 
        <div className="bookshelf-books">
        	<BookGrid books={books} updateBook={updateBook} /> 
        </div>
       </div>
)

export default BookShelf;