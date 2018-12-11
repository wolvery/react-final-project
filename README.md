# REACT: MyReads Project

This is a project from Udacity to put in practice everything that we have learned so far. In this project you are going to see the functional and classed components. Functional Components are appropriate when they are going to be stateless. [Here is some good reason to use functional components when there is a chance](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)

Besides these two option to write a component in react, you can see in this project the use of React-router and the apropriate moment to use external fetch.

## How to Instal and use

To get started :

* install all project dependencies with `npm install`
* start the development server with `npm start`

To access:

* Access the link provided while performing `npm install`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Redirects to SearchBook and ListBook.
    ├── App.test.js # Files with some initial tests.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    │ Developed files to fulfill the project
    ├── BookGrid.js # Component to produce the rows of books.
    ├── BookItem.js # Simple functional react component to render only a book.
    ├── BookShelf.js # Functional stateless Component to represent a shelf which displays its name and a BookGrid.
    ├── BookShelfChanger.js # Select box to represent the actual shelf of its book and an option to change it.
    ├── SearchBooks.js # Displays the UI to the user perform an search using a possible term.
    └── SearchBooksForm.js # Display a form to the user interact with.
    
    
```

# Extra Informations provided by Udacity
Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
