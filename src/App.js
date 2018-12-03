import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooksPage from './SearchBooksPage.js'
import ListBooks from './ListBooks.js'


class BooksApp extends React.Component {
  state = {
    teste:""
  }

  render() {
    return (
      <div className="app">
      
        <Route path="/search" component={SearchBooksPage} />

        <Route exact path="/" component={ListBooks} />

      </div>
      )
  }
}

export default BooksApp
