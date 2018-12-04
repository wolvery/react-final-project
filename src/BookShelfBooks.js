import React from 'react'
import BookItem from './BookItem.js'



export class BookShelfBooks extends React.Component{
  render() {
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => (<BookItem book={book} updateBook={this.props.updateBook} />))}
        </ol>
      </div>
      )
}