import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
// import App from './components/app/App';
import Search from './components/search/Search';


ReactDOM.render(
  <Search/>, // react will call new App()
  document.getElementById('root')
);