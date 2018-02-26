import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../header/Header'
// import Search from '../search/Search';
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
                            {/* () => <div> returns automatically</div> */}
                            {/* <Route path="/search" component={Search}/> */}

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
        return <div>I am Home!</div>;
    }
    }


    // state = {
    //     title: null,
    //     topic: null,
    //     results: [],
    //     page: 1,
    //     loading: false 
    // }

    // searchMovies () {
    //     const { topic, page } = this.state;

    //     this.setState({ loading: true, error: null });

    //     search(topic, page)
    //         .then(response => {
    //             this.setState({
    //                 results: response.Search,
    //                 totalResults: response.totalResults
    //             })
    //         })
    //         .then(() => {
    //             this.setState({ loading: false })
    //         })

    //         //TODO
    //         .catch( err => console.log(err));
    // }

    // handleSearch = topic => {
    //     this.setState({ topic }, () => {
    //         this.searchMovies();
    //     })
    // }

    // handleNext = () => this.handlePaging(1);
    // handlePrev = () => this.handlePaging(-1);

    // handlePaging = incr => {
    //     this.setState(
    //     prev => ({ page: prev.page + incr }),
    //     this.searchMovies 
    //     );
    // } 


    // render() {
    //     const { loading, results, topic, page, totalResults } = this.state;

    //     const ofXPages = Math.ceil(totalResults/10);

    //     return(
    //         <div className="app">
    //             <header id="header">
    //                 <h1>Movie Search App</h1>
    //                 <Search onSearch={this.handleSearch}/>
    //             </header>
    //             <main id="main">
                    
    //                 <div className="search-header">
    //                     <h4>Search for &quot;{topic}&quot; found {totalResults} matches</h4>
                        
    //                 </div>

    //                 <div>{loading && 'Loading...'}</div>
                    
    //                 <div>
    //                     <div> This is page {page} of {ofXPages}</div>
    //                     <button onClick={this.handlePrev} >Previous page</button>
    //                     <button onClick={this.handleNext} >Next page</button>
    //                 </div>

    //                 {results && (
    //                     <div>
    //                         <Movies results={results}/>
    //                     </div>
    //                 )}
    //             </main>
    //         </div>
    //     );
        
    // }

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