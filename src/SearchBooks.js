import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import BookGrid from './BookGrid.js'


export default class SearchBooks extends React.Component {
  state = {
    books: []
  }

  loadBooks = query =>{
    BooksAPI.search(query, 30).then(fetchedBooks => this.setState({books:fetchedBooks}));
  }

  render() {
    return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <SearchBooksForm loadBooks={this.loadBooks}
      </div>
      <div className="search-books-results">
        <BookGrid books={this.state.books} updateBook={BooksAPI.update} /> 
      </div>
    </div>
  )}
}