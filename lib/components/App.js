import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state-api';

export default class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  }

  async componentDidMount() {
    const response = await axios.get('/data');
    const api = new DataApi(response.data);

    this.setState(() => {
      return {
        articles: api.getArticles(),
        authors: api.getAuthors(),
      }
    });
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
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
