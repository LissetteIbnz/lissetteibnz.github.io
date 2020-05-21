import React from 'react';
import { useComponentIsMounted } from '@/common/hooks';
import { useFetchIssueByNumber } from '@/core/api';
import { createEmptyPost, mapIssueAMToPostVM } from './post-details.mappers';
import { Post } from './post-details.vm';

export const usePost = (id: number): { post: Post; loading: boolean } => {
  const isMounted = useComponentIsMounted();
  const [post, setPost] = React.useState<Post>(createEmptyPost());
  const { issue, loading } = useFetchIssueByNumber(id);

  React.useEffect(() => {
    if (isMounted && !loading) {
      !!issue && setPost(mapIssueAMToPostVM(issue));
    }
  }, [isMounted, loading, issue]);

  return {
    post,
    loading,
  };
};
