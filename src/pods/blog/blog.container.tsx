import React from 'react';
import { useLoaderContext } from '@/common/components';
import { usePostsList } from './api';
import { BlogComponent } from './blog.component';

export const BlogContainer: React.FC = () => {
  const { posts, loading } = usePostsList();
  useLoaderContext(loading);

  return <BlogComponent posts={posts} />;
};
