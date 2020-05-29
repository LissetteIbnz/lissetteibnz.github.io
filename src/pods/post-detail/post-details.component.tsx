import React from 'react';
import { MarkdownViewer, LazyImage, Container } from '@/common/components';
import { Author, FooterActions, Title } from './components';
import { Post } from './post-details.vm';
import { Theme } from '@/core/theme/theme.vm';

interface PostDetailsProps {
  comment: string;
  post: Post;
  theme: Theme;
  updateComment: (comment: string) => void;
}

export const PostDetailsComponent: React.FC<PostDetailsProps> = ({ post, theme }) => {
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
          theme={theme}
        />
        {renderMarkdown()}
        <FooterActions urlGitHub={post.urlGitHub} />
      </Container>
    </>
  );
};
