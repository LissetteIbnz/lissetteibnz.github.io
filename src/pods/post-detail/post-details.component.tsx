import React from 'react';
import { MarkdownViewer, LazyImage, Container } from '@/common/components';
import { Author, FooterActions, Title } from './components';
import { Post } from './post-details.vm';

interface PostDetailsProps {
  post: Post;
}

export const PostDetailsComponent: React.FC<PostDetailsProps> = ({ post }) => {
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
    <>
      {renderImage()}
      <Container>
        <Title>{post.title}</Title>
        <Author
          author={post.author}
          datePublish={post.datePublish}
          readingTime={post.readingTime}
        />
        {renderMarkdown()}
        <FooterActions urlGitHub={post.urlGitHub} />
      </Container>
    </>
  );
};
