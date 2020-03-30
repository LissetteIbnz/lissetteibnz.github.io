import React from 'react';
import { useParams } from 'react-router-dom';
import { PostDetails, UrlParams } from '@/pods/post-detail';

export const PostDetailsScene = () => {
  const { issueNumber } = useParams<UrlParams>();

  return <PostDetails issueNumber={issueNumber} />;
};
