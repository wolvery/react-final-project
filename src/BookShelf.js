import React from 'react'
import BookGrid from './BookGrid.js'



const BookShelf = ({shelf,books,updateBook}) => 
    ( <div className="bookshelf" >
        <h2 className="bookshelf-title" > {shelf} </h2> 
        <div className="bookshelf-books">
        	<BookGrid books={books} updateBook={updateBook} /> 
        </div>
       </div>
)

export default BookShelf;