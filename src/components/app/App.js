import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import SearchHolder from '../search/SearchHolder';
import MovieDetail from '../movie/MovieDetail';
import About from '../about/About';

export default class App extends Component {

  render() {

    
    return (
      <Router>
        <div id="container">
          <header id="header">
            <Link to="/"><h1>MoviesNow App</h1></Link>
            <Link to="/about">About Page</Link>
            <Link to="/">New Search</Link>
          </header>

          <main id="main">
            <Switch>
              <Route exact path="/" component={SearchHolder}/>
              <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/>
              <Route exact path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
          </main>

          <footer id="footer">
            <ul>
              <li>
                <a href="https://github.com/Theartbug" target="_blank" rel="noopener noreferrer">
                  <span className="fa fa-github fa-3x"></span>
                  <span className="clip">Github</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/graceprovost/" target="_blank" rel="noopener noreferrer">
                  <span className="fa fa-linkedin fa-3x"></span>
                  <span className="clip">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:grace.g.provost@gmail.com">
                  <span className="fa fa-envelope-square fa-3x"></span>
                  <span className="clip">Email</span>
                </a>
              </li>
            </ul>
            <small>&copy; 2018 Grace Provost | Student Work</small>
          </footer>
        </div>
      </Router>
    );
  }
}