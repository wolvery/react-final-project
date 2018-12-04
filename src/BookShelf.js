import React from 'react'
import BookShelfBooks from './BookShelfBooks.js'



export class BookShelf extends React.Component{
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <BookShelfBooks book={this.props.book} updateBook={this.props.updateBook}}
      </div>
      )
  }
}