import React from 'react';
import type { Theme } from '@/core/theme';
import { Card } from './components';
import { Post } from './blog.vm';

interface BlogProps {
  posts: Post[];
  theme: Theme;
  loadPostById: ({ title, id }: Post) => void;
}

export const BlogComponent: React.FC<BlogProps> = ({ posts, theme, loadPostById }) => (
  <>
    {posts.map((post, index) => (
      <Card key={index} post={post} loadPostById={loadPostById} theme={theme}>
        {post.brief}
      </Card>
    ))}
  </>
);
