import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  article: {
    padding: 8
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.85em',
    color: '#888'
  },
  author: {
    padding: 8
  },
  body: {
    padding: 8
  }
};

const Article = (props, { store }) => {
  const { article } = props;
  const author = store.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{article.date}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  artcle: PropTypes.shape({
    date: PropTypes.string.isRequired
  })
};

Article.contextTypes = {
  store: PropTypes.object,
};

export default Article;