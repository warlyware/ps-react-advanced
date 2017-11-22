import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class App extends Component {
  state = {
    answer: 42
  };
  render() {
    return (
      <h2>Hello Class Components -- {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
