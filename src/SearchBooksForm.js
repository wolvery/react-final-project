import React from 'react'


export default class SearchBooks extends React.Component {
  state = {
    query : ""
  }

  loadValue = event => {
    this.setState({query: event.target.value});
    this.props.loadBooks(event.target.value);
  }

  performSearch = event =>{
    event.preventDefault();
    this.props.loadBooks(this.state.query);
  }

  render() {
    return (
        <div className="search-books-input-wrapper">
          <form onSubmit={this.performSearch}>
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.loadValue} />
            <input type="submit" hidden />
          </form>
        </div>
      
  )}
}