import React from 'react';
import { Post } from '../post-details.vm';
import * as classes from './author.styles';

type AuthorProps = Pick<Post, 'author' | 'datePublish' | 'readingTime'>;
export const Author: React.FC<AuthorProps> = props => (
  <div className={classes.author}>
    <Avatar {...props.author} />
    <InfoAuthor {...props} />
  </div>
);

type AvatarProps = AuthorProps['author'];
const Avatar: React.FC<AvatarProps> = ({ avatarUrl, name }) => (
  <img className={classes.avatar} src={avatarUrl} alt={name} />
);

type InfoAuthorProps = AuthorProps;
const InfoAuthor: React.FC<InfoAuthorProps> = ({ author, datePublish, readingTime }) => (
  <div>
    <p className={classes.infoAuthor}>
      <a aria-label={author.name} href={author.url} target="_blank" rel="noopener noreferrer">
        {author.name}
      </a>
    </p>
    <p className={classes.infoPost}>
      {datePublish} · {readingTime}
    </p>
  </div>
);
