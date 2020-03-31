import React from 'react';
import { CenteredLayout } from '@/layouts';
import { MarkdownViewer, Loader } from '@/common/components';
import { usePost } from './api';
import { css } from 'emotion';

interface PostDetailsProps {
  issueNumber: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ issueNumber }) => {
  const { post, loading } = usePost(issueNumber);

  return (
    <Loader loading={loading}>
      <CenteredLayout>
        <h1>{post?.title}</h1>
        <div
          className={css`
            display: flex;
            align-items: center;
            padding-bottom: 1.2rem;
          `}
        >
          <img
            className={css`
              width: 50px;
              height: 50px;
              border-radius: 40px;
              margin: 10px;
              margin-left: 0px;
            `}
            src={post.avatarUrl}
            alt={post.author}
          />
          <div>
            <p
              className={css`
                margin-bottom: 0px;
                margin-top: 0px;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.84);
              `}
            >
              {post.author}
            </p>
            <p
              className={css`
                color: rgba(0, 0, 0, 0.54);
                font-weight: 400;
                font-size: 14px;
                margin-bottom: 0px;
                margin-top: 0px;
              `}
            >
              {post.datePublish} · {post.readingTime} ·
              <a
                className={css`
                  font-size: 14px;
                  text-decoration: none;
                  transition-duration: 0.15s, 0.15s, 0.15s;
                  transition-timing-function: ease-in, ease-in, ease-in;
                  transition-delay: 0s, 0s, 0s;
                  color: rgba(0, 0, 0, 0.54);
                  :hover {
                    color: rgba(0, 0, 0, 0.84);
                  }
                `}
                href={post.urlGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                View On Github
              </a>
            </p>
          </div>
        </div>
        {post?.content && <MarkdownViewer content={post.content} />}
      </CenteredLayout>
    </Loader>
  );
};
