import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class App extends Component {
  state = {
    answer: 42
  };

  asyncFunction = () => {
    return Promise.resolve(100);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunction()
    });
  }

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
