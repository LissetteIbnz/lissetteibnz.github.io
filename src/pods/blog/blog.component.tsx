import React from 'react';
import { Card } from './components';
import { Post } from './blog.vm';

interface BlogProps {
  posts: Post[];
  loadPostById: ({ title, id }: Post) => void;
}

export const BlogComponent: React.FC<BlogProps> = ({ posts, loadPostById }) => (
  <>
    {posts.map((post, index) => (
      <Card key={index} post={post} loadPostById={loadPostById}>
        {post.brief}
      </Card>
    ))}
  </>
);
