import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'
import './css/books.css';


const el = document.getElementById('root');
const root = ReactDom.createRoot(el);


root.render(<App />);






/*
css-->

index: 
import css


App: 
div --> app
h3 --> title



BookCreate:
div -->  book-create
input --> input
button --> button


BookEdit: 
div --> book-edit
input --> input
button --> button is-primary



BookShow: 
div --> book-show
div --> actions
button --> delete
button --> edit


BookList:
div --> book-list

*/