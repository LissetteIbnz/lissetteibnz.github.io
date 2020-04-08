import React from 'react';
import { useParams } from 'react-router-dom';
import { PostDetails, UrlParams } from '@/pods/post-detail';
import { AppLayout } from '@/layouts';

export const PostDetailsScene = () => {
  const { issueNumber } = useParams<UrlParams>();

  return (
    <AppLayout>
      <PostDetails issueNumber={issueNumber} />
    </AppLayout>
  );
};
