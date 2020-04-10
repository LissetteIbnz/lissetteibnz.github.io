import React from 'react';
import { MarkdownViewer, Loader, LazyImage, Container } from '@/common/components';
import { usePost } from './api';
import { Author, FooterActions, Title } from './components';

interface PostDetailsProps {
  issueNumber: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ issueNumber }) => {
  const { post, loading } = usePost(issueNumber);

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
        <Title>{post.title}</Title>
        <Author post={post} />
        {renderMarkdown()}
        <FooterActions urlGitHub={post.urlGitHub} />
      </Container>
    </Loader>
  );
};
