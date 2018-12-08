import React from 'react'
import BookShelfBooks from './BookShelfBooks.js'



const BookShelf = ({shelf,books,updateBook}) => 
    ( <div className = "bookshelf" >
        <h2 className = "bookshelf-title" > {shelf} </h2> 
        <BookShelfBooks books={books} updateBook={updateBook} /> 
       </div>
)

export BookShelf;