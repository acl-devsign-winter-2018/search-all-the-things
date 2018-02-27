import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Header.css';


export default class Header extends Component {

    render() {

      return (
        <header role="banner" id="header">
          <h1>Movie Search APP</h1>
          <nav>
            <ul className={styles.nav}>
              <li><Link to="/">Home link text from header</Link></li>
              <li><Link to="/search">Search</Link></li>
              {/* <Route path="/movies" render={() => <li>.</li>}/> */}
            </ul>
          </nav>
        </header>
      );
    }
  }
  