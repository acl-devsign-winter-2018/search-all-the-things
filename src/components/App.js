import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Search from './search/Search';
import MovieDetail from './movies/MovieDetail';
// import Paging from './paging/Paging';
// import Articles from './movies/Articles';
// import { search } from '../services/omdbApi';

export default class App extends Component {

  render() {

    return (
      <div className="app">

        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>

        <footer role="contentinfo" id="footer">
          <p>(c) Search App | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>

      </div>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Find movies now!</div>;
  }
}