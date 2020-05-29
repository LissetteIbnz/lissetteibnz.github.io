import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@/core/theme';
import { useLoaderContext } from '@/common/components';
import { usePost } from './post-details.api';
import { UrlParams } from './post-details.vm';
import { PostDetailsComponent } from './post-details.component';

export const PostDetailsContainer: React.FC = () => {
  const theme = useTheme();
  const [comment, setComment] = React.useState<string>('');
  const { issueNumber } = useParams<UrlParams>();
  const { post, loading } = usePost(Number(issueNumber));

  useLoaderContext(loading);

  return (
    <PostDetailsComponent post={post} comment={comment} updateComment={setComment} theme={theme} />
  );
};
