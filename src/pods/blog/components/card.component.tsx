import React from 'react';
import { useHistory, generatePath } from 'react-router-dom';
import { css } from 'emotion';
import { switchRoutes } from '@/core/router';
import { literals } from '@/core/i18n';
import { Tag } from '../blog.vm';
import * as classes from './card.styles';

interface CardProps {
  post: {
    id: number;
    tags?: Tag[];
    readingTime: string;
    title: string;
    datePublish: string;
  };
}

export const Card: React.FC<CardProps> = ({
  post: { datePublish, readingTime, title, tags, id },
  children,
}) => {
  const history = useHistory();

  const handleOnClick = () => {
    const path = generatePath(switchRoutes.blogPost, { title, issueNumber: id });
    history.push(path);
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
