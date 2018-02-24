import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Movies from '../movies/Movies';
import { search } from '../../services/movieApi';
import Search from '../search/Search';


export default class App extends Component {

    state = {
        title: null,
        topic: null,
        results: [],
        page: 1,
        loading: false 
    }

    searchMovies () {
        const { topic, page } = this.state;
        search(topic, page)
            .then(response => {
                this.setState({
                    results: response.Search,
                    totalResults: response.totalResults
                })
            })

            //TODO
            .catch( err => console.log(err));
    }

    handleSearch = topic => {
        this.setState({ topic }, () => {
            this.searchMovies();
        })
    }

    handleNext = () => this.handlePaging(1);

    handlePaging = incr => {
        this.setState(
        prev => ({ page: prev.page + incr }),
        this.searchMovies 
        );
    } 


    render() {
        const { results } = this.state;

        return(
            <div>
                <header>
                    <Search onSearch={this.handleSearch}/>
                    Search goes here
                </header>
                <main>
                    <div>Search Summary</div>
                    <div>Paging goes here</div>
                    <div>List goes here: </div>

                    <button onClick={this.handleNext} >Next page</button>

                    {results && (
                        <div>
                            <Movies results={results}/>
                        </div>
                    )}
                </main>
            </div>
        );
        
    }
}
                // return (
                //     <Router>
                //         <div>
                //             <h1>Header goes here</h1>
                //             <main>
                //                 <Switch>
                //                     <Route exact path='/' render={({match}) => {
                //                         return <div>Home here</div>}} /> 
                //                     {/* () => <div> returns automatically</div> */}
                //                     <Route path="/search" component={Search}/>
                                
                //                 </Switch>
                //             </main>
                //         </div>
                //     </Router>
                // );