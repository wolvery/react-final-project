import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import BookShelf from './BookShelf.js'


export default class ListBooks extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     books: []
   };
 }

  updateBook = (bookToUpdate, bookShelf) => {    
    BooksAPI.update(bookToUpdate, bookShelf);
    let bookUpdated = bookToUpdate;
    bookUpdated.shelf = bookShelf;
    if (bookShelf !== "none"){
      this.setState((currentState) =>  ({books:[...currentState.books.filter(bookInState => bookUpdated.id !== bookInState.id), bookUpdated]}));
    }else{
      this.setState((currentState) =>  ({books:[...currentState.books.filter(bookInState => bookUpdated.id !== bookInState.id)]}));
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksRetrieved) => this.setState({books: booksRetrieved}));
  }

  render() {
    const shelves = [...new Set(this.state.books.map(book => book.shelf))].sort();
    return (

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {shelves.map(shelf => <BookShelf key={shelf} shelf={shelf} books={this.state.books.filter(book => book.shelf === shelf && book.shelf)} 
                updateBook={this.updateBook} />)              
              }
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>

)}

}

