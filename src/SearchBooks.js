import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import BookGrid from './BookGrid.js'
import { debounce } from "debounce"
import SearchBooksForm from './SearchBooksForm.js'



export default class SearchBooks extends React.Component {
  state = {
    books: []
  }

  loadBooks = query =>{
    if (query){
      debounce(BooksAPI.search(query, 30).then(fetchedBooks => {
          if (!fetchedBooks || fetchedBooks.error){
            fetchedBooks = [];
          }
          this.setState({books:fetchedBooks});
        }).catch((error)=> {
          this.setState({books:[]}); 
      }), 250);
    }else{
                this.setState({books:[]});
    }
  }

  render() {
    return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <SearchBooksForm loadBooks={this.loadBooks} />
      </div>
      <div className="search-books-results">
        <BookGrid books={this.state.books} updateBook={BooksAPI.update} /> 
      </div>
    </div>
  )}
}