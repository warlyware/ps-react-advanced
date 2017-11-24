import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state-api';
// import { data } from '../testData';

// const api = new DataApi(data);

export default class App extends Component {
  state = {
    articles: {},
    authors: {},
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
