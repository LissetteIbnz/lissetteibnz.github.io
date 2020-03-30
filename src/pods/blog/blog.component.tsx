import React from 'react';
import { CenteredLayout } from '@/layouts';
import { Card } from './components';
import { usePostsList } from './api/blog.api-hooks';

export const Blog = () => {
  const { posts } = usePostsList();

  return (
    <CenteredLayout>
      {posts.map((post, index) => (
        <Card key={index} post={post}>
          {post.content}
        </Card>
      ))}
    </CenteredLayout>
  );
};
