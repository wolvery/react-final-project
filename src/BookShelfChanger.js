import React from 'react'




export class BookShelfChanger extends React.Component{
	state = {value:"move"}
	
	handleChange(event) {
    	this.props.updateBook(this.props.books, event.target.value);
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

