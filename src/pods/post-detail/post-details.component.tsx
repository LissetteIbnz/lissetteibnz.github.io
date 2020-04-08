import React from 'react';
import { CenteredLayout } from '@/layouts';
import { MarkdownViewer, Loader, LazyImage } from '@/common/components';
import { usePost } from './api';
import { Author, FooterActions } from './components';
import { css } from 'emotion';

interface PostDetailsProps {
  issueNumber: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ issueNumber }) => {
  const { post, loading } = usePost(issueNumber);

  const renderTitle = () =>
    post?.title && (
      <h1
        className={css`
          margin: 1rem 0;
        `}
      >
        {post?.title}
      </h1>
    );
  const renderMarkdown = () => post?.content && <MarkdownViewer content={post.content} />;

  return (
    <Loader loading={loading}>
      <CenteredLayout>
        <LazyImage
          url="https://images.unsplash.com/photo-1582970816926-c8b60f417661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt={post.title}
          description="Photo by <a href='https://unsplash.com/@fhanspach'>Felix Hanspach</a>"
        />
        {renderTitle()}
        <Author post={post} />
        {renderMarkdown()}
        <FooterActions urlGitHub={post.urlGitHub} />
      </CenteredLayout>
    </Loader>
  );
};
