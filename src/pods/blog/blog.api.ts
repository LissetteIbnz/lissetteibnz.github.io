import React from 'react';
import { useFetchLastIssues } from '@/core/api';
import { useComponentIsMounted } from '@/common/hooks';
import { mapIssueListAMToVM } from './blog.mappers';
import { Post } from './blog.vm';

export const usePostsList = (): { posts: Post[]; loading: boolean } => {
  const isMounted = useComponentIsMounted();
  const [posts, setPosts] = React.useState<Post[]>([]);
  const { issues, loading } = useFetchLastIssues();

  React.useEffect(() => {
    if (isMounted && !loading) {
      Boolean(issues) && setPosts(mapIssueListAMToVM(issues));
    }
  }, [isMounted, loading, issues]);

  return {
    loading,
    posts,
  };
};
