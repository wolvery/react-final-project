import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf.js'


export default class ListBooks extends React.Component {
  

  render() {
    const shelves = [...new Set(this.props.books.map(book => book.shelf))];
    return (

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {shelves.map(shelf => <BookShelf shelf={shelf} book={this.props.books.filter(book => book.shelf === shelf)} 
                updateBook={this.props.updateBook})
              </div>
              }
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>

)}

}

