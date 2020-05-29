import React from 'react';
import { useHistory, generatePath } from 'react-router-dom';
import { switchRoutes } from '@/core/router';
import { useTheme } from '@/core/theme';
import { useLoaderContext } from '@/common/components';
import { usePostsList } from './blog.api';
import { Post } from './blog.vm';
import { BlogComponent } from './blog.component';

export const BlogContainer: React.FC = () => {
  const theme = useTheme();
  const history = useHistory();
  const { posts, loading } = usePostsList();
  useLoaderContext(loading);

  const loadPostById = ({ title, id }: Post) => {
    const path = generatePath(switchRoutes.blogPost, { title, issueNumber: id });
    history.push(path);
  };

  return <BlogComponent posts={posts} loadPostById={loadPostById} theme={theme} />;
};
