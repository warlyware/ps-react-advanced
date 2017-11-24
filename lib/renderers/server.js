import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import DataApi from 'state-api';
import config from '../config';
import App from 'components/App';

const serverRender = async () => {
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(response.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  }

  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  )
}

export default serverRender;