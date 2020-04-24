import React from 'react';
import { Card } from './components';
import { Post } from './blog.vm';

interface BlogProps {
  posts: Post[];
}

export const BlogComponent: React.FC<BlogProps> = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <Card key={index} post={post}>
        {post.content}
      </Card>
    ))}
  </>
);
