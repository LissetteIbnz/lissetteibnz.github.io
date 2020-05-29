import React from 'react';
import { css } from 'emotion';
import { literals } from '@/core/i18n';
import type { Theme } from '@/core/theme';
import { Post } from '../blog.vm';
import * as classes from './card.styles';

interface CardProps {
  post: Post;
  theme: Theme;
  loadPostById: ({ title, id }: Post) => void;
}

export const Card: React.FC<CardProps> = ({ post, theme, loadPostById, children }) => {
  const { datePublish, readingTime, title, tags } = post;

  const handleOnClick = () => {
    loadPostById(post);
  };

  return (
    <div className={classes.container(theme)} onClick={handleOnClick}>
      <div className={classes.header(theme)}>
        <div className={classes.tags(theme)}>
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
          {datePublish}
          <span>{`${readingTime} ${literals.post.timeToRead}`}</span>
        </p>
      </div>
      <div>
        <h2>{title}</h2>
        <p className={classes.brief}>{children}</p>
      </div>
    </div>
  );
};
