import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useComponentIsMounted } from '@/common/hooks';
import { Post } from '../post-details.vm';
import { mapIssueAMToPostVM } from '../post-details.mappers';
import { GetPostResponse } from './post-details.api-model';
import { getPostByIssue } from './post-details.api';

export const usePost = (issueNumber: string): { post: Post; loading: boolean } => {
  const isMounted = useComponentIsMounted();

  const [post, setPost] = React.useState<Post>();
  const { loading, error, data } = useQuery<GetPostResponse>(getPostByIssue(issueNumber));

  React.useEffect(() => {
    if (!loading) {
      error && console.error(error);
      data && isMounted && setPost(mapIssueAMToPostVM(data?.repository?.issue));
    }
  }, [loading, error, data]);

  return {
    post,
    loading,
  };
};
