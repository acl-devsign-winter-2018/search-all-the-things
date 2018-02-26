import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../header/Header'
import Search from '../search/Search';
import MovieDetail from '../movies/MovieDetail';

// import { search } from '../../services/movieApi';
// import Movies from '../movies/Movies';




export default class App extends Component {


    render() {

        return (
            <Router>
                <div>
                    <Header/>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home}/> 
                            <Route path="/search" component={Search}/>
                            <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/>

                            {/* <Redirect to="/"/> */}

                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

class Home extends Component {
    render() {
        return <div>I am the component Home!</div>;
    }
}


