import React, { Component } from 'react';

export default class App extends Component {

  state = {
    count: 1
  };

  handleMore = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Learning React Components</h1>
        <button onClick={this.handleMore}>More!</button>
        <A number={count}/>
        <B/>
      </div>
    );
  }
}

class A extends Component {

  constructor() {
    super();
    console.log('A is initializing');
  }

  render() {
    console.log('A is rendering');
    const { number } = this.props;
    return <div>I am an instance of A, my number is {number}</div>;
  }
}

class B extends Component {

  render() {
    return <div>I am an instance of B</div>;
  }
}