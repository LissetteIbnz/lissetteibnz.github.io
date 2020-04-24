import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderContext } from '@/common/components';
import { usePost } from './api';
import { UrlParams } from './post-details.vm';
import { PostDetailsComponent } from './post-details.component';

export const PostDetailsContainer: React.FC = () => {
  const { issueNumber } = useParams<UrlParams>();
  const { post, loading } = usePost(issueNumber);
  useLoaderContext(loading);

  return <PostDetailsComponent post={post} />;
};
