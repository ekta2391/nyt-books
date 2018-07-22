import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class List extends Component {
  loadBooks () {
    $.ajax({
      url: 'http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=c22f513c6a1e477783122f38f8d0b9cc',
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      success: function(response) { console.log(response)},
      error: function() { alert('Failed!'); }
      // beforeSend: 'setHeader'
    })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='button__container'>
          <button className='button' onClick={this.loadBooks}>Load Books</button>
          <div>
            {this.props.result[0].name}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    result: state.result
  }
}

export default connect(mapStateToProps)(List);
