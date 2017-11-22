import React from 'react';

export default () => {
  return (
    <div>
      {Object.values(props.articles).map(article => {
        <Article
          key={article.id}
          article={article}
          author={props.authors[article.authorId]}
        />
      })}
    </div>
  );
};
