import React from 'react';
import { CenteredLayout } from '@/layouts';
import { PreLoader } from '@/common/components/pre-loader/pre-loader.component';
import { usePostsList } from './api/';
import { Card } from './components';
import { Loader } from '@/common/components';

export const Blog = () => {
  const { posts, loading } = usePostsList();

  return (
    <Loader loading={loading}>
      <CenteredLayout>
        {posts.map((post, index) => (
          <Card key={index} post={post}>
            {post.content}
          </Card>
        ))}
      </CenteredLayout>
    </Loader>
  );
};
