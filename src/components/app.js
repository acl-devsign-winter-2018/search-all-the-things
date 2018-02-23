import React, { Component } from 'react';
import SearchAll from './search/SearchAll';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';
import Details from './details/Details';
import DetailContainer from './details/DetailContainer';




export default class App extends Component {

  state = {
    category: null,
    topic: null,
    error: null
  };

  render(){
   
    return (
      <Router>
        <div>

          {/* <header>
            <SearchAll/>
          </header> */}
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" component={SearchAll}/>
              <Route path="/search/:name" render={({ match }) => <DetailContainer name={match.params.name}/>}/>
              <Redirect to="/"/>
            </Switch>

          </main>

        </div>
      </Router>

    );
  }

} 