import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import './App.css';
// import { search } from '../services/movieApi';
import Search from '../search/Search';


export default class App extends Component {

  
    render() {
       
        return (
            <Router>
                <div>
                    <h1>Header goes here</h1>
                    <main>
                        <Switch>
                            <Route exact path='/' render={({match}) => {
                                return <div>Home here</div>}} /> 
                            {/* () => <div> returns automatically</div> */}
                            <Route path="/search" component={Search}/>
                        
                        </Switch>
                    </main>
                </div>
            </Router>
        );

    }
}