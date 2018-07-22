import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';
import List from './BookList/List.js';
import $ from 'jquery';
import {resultFetchData} from './actions/items'

class App extends Component {
  constructor () {
    super()
    this.state = {
      result: []
    }

  }
// }
  componentDidMount() {
    this.props.fetchData('http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=c22f513c6a1e477783122f38f8d0b9cc')
  }
  render() {
    if(this.props.hasErrored) {
      return
      <p>Sorry there was an error loading books</p>;
    }
    if(this.props.isLoading) {
      return
      <p>Loading...</p>;
    }
    return (
      <div>
      <h1>Test</h1>
      <h2>{this.props.result}</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    result: [] || state.results,
    hasErrored: state.resultHasErrored,
    isLoading: state.resultIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(resultFetchData(url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
