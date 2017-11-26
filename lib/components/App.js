import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  }
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
        />
      </div>
    );
  }
}
