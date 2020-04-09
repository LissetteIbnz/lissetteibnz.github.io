import React from 'react';
import { css } from 'emotion';
import { MarkdownViewer, Loader, LazyImage, Container } from '@/common/components';
import { usePost } from './api';
import { Author, FooterActions } from './components';

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
          text-align: center;
        `}
      >
        {post?.title}
      </h1>
    );

  const renderImage = () =>
    post?.attributes?.imagePath && (
      <LazyImage
        url={post.attributes.imagePath}
        alt={post.title}
        description={post.attributes.imageDescription}
      />
    );

  const renderMarkdown = () => post?.content && <MarkdownViewer content={post.content} />;

  return (
    <Loader loading={loading}>
      {renderImage()}
      <Container>
        {renderTitle()}
        <Author post={post} />
        {renderMarkdown()}
        <FooterActions urlGitHub={post.urlGitHub} />
      </Container>
    </Loader>
  );
};
