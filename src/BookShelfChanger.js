import React from 'react'
import * as BooksAPI from './BooksAPI.js'

const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => hasCanceled_ ? reject() : resolve(val),
      error => hasCanceled_ ? reject() : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};



export default class BookShelfChanger extends React.Component{
  constructor(props) {
    super(props)
	this.state = {value: ""}
  }
	
	handleChange= (event) => {
    	this.props.updateBook(this.props.book, event.target.value);
        this.setState({value:event.target.value});
  	}
	componentDidMount() {
    this.request = makeCancelable(BooksAPI.get(this.props.book.id));
	this.request.promise.then((book) => this.setState({value: book.shelf})).catch(error => {});
  }
	componentWillUnmount() {
      this.request.cancel();
}
	render() {
		return(
			<div className="book-shelf-changer">
				<select value={this.state.value} onChange={this.handleChange}> 
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
			)
		}
}

