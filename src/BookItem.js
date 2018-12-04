import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'



export class BookItem extends React.Component{
  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
            style={{ width: 128, height: 193, backgroundImage: 'url({this.props.book.imageLinks.thumbnail})' }}></div>
            <BookSelfChanger bookId={this.props.book.id} updateBook={this.props.updateBook} />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors.join(",")}</div>
        </div>
      </li>)
    }
}