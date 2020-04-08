import React from 'react';
import { css } from 'emotion';
import { theme } from '@/core/theme';
import { Post } from '../post-details.vm';

const { primary, secondary } = theme.text;

interface AuthorProps {
  post: Post;
}

export const Author = ({ post }: AuthorProps) => (
  <div
    className={css`
      display: flex;
      align-items: center;
      /* padding-bottom: 1.2rem; */
    `}
  >
    <Avatar {...post} />
    <InfoAuthor {...post} />
  </div>
);

const Avatar = ({ avatarUrl, author }: Post) => (
  <img
    className={css`
      width: 50px;
      height: 50px;
      border-radius: 40px;
      margin: 10px;
      margin-left: 0px;
    `}
    src={avatarUrl}
    alt={author}
  />
);

const InfoAuthor = (post: Post) => (
  <div>
    <p
      className={css`
        line-height: 1.5rem;
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 16px;
        a {
          font-size: 16px;
          color: ${primary};
          &:hover {
            text-decoration: underline;
          }
        }
      `}
    >
      <a href={post.authorUrl} target="_blank" rel="noopener noreferrer">
        {post.author}
      </a>
    </p>
    <p
      className={css`
        color: ${secondary};
        line-height: 1.5rem;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 0px;
        margin-top: 0px;
      `}
    >
      {post.datePublish} · {post.readingTime}
    </p>
  </div>
);
