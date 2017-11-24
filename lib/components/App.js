import React, { Component } from 'react';

import ArticleList from './ArticleList';

export default class App extends Component {
  state = this.props.store.getState();

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
