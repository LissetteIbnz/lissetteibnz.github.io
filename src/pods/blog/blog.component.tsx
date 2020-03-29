import React from 'react';
import { CenteredLayout } from '@/layouts';
import { Card } from './components';
import { usePost } from './api/blog.hooks';

export const Blog = () => {
  const { posts } = usePost();

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
