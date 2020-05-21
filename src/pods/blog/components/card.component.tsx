import React from 'react';
import { css } from 'emotion';
import { literals } from '@/core/i18n';
import { Post } from '../blog.vm';
import * as classes from './card.styles';

interface CardProps {
  post: Post;
  loadPostById: ({ title, id }: Post) => void;
}

export const Card: React.FC<CardProps> = ({ post, loadPostById, children }) => {
  const { datePublish, readingTime, title, tags } = post;

  const handleOnClick = () => {
    loadPostById(post);
  };

  return (
    <div className={classes.container} onClick={handleOnClick}>
      <div className={classes.header}>
        <div>
          {tags &&
            tags.map(tag => (
              <div
                key={tag.label}
                className={css`
                  background-color: ${tag.color};
                `}
              >
                {tag.label}
              </div>
            ))}
        </div>
        <p>
          {`${literals.post.published} ${datePublish}`}
          <span>{`${readingTime} ${literals.post.timeToRead}`}</span>
        </p>
      </div>
      <div className={classes.content}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};
