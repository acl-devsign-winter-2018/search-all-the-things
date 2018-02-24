import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Movies from '../movies/Movies';
import { search } from '../../services/movieApi';
import Search from '../search/Search';

const PAGE_SIZE = 10;

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
    handlePrev = () => this.handlePaging(-1);

    handlePaging = incr => {
        this.setState(
        prev => ({ page: prev.page + incr }),
        this.searchMovies 
        );
    } 


    render() {
        const { results, topic, page, totalResults } = this.state;

        const ofXPages = totalResults/10;

        return(
            <div>
                <header>
                    <Search onSearch={this.handleSearch}/>
                </header>
                <main>
                    
                    <h4>Search for &quot;{topic}&quot; found {totalResults} matches</h4>
                    <div> This is page {page} of {ofXPages}</div>


                    <div>Paging goes here
                    <button onClick={this.handlePrev} >Previous page</button>
                    <button onClick={this.handleNext} >Next page</button>
                    </div>

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