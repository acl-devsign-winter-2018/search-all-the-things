import React, { Component } from 'react';
import SearchAll from './search/SearchAll';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import DetailContainer from './details/DetailContainer';


export default class App extends Component {

  state = {
    category: 'people'
  };

  handleDropdown = ({ target }) => {
    this.setState({ category: target.value.toLowerCase() });
    
  };

  render(){
   
    return (
      <Router>
        <div>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" render={ () => <SearchAll category={this.state.category} handleDropdown={this.handleDropdown}/>}/>
              <Route path="/search/:name" render={({ match }) => <DetailContainer name={match.params.name} category={this.state.category}/>}/>
              <Redirect to="/"/>
            </Switch>
          </main>

        </div>
      </Router>
    );
  }
} 