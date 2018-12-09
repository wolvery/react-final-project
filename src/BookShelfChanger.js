import React from 'react'
import * as BooksAPI from './BooksAPI.js'





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
    BooksAPI.get(this.props.book.id).then((book) => this.setState({value: book.shelf}));
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

