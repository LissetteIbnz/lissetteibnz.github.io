import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useComponentIsMounted } from '@/common/hooks';
import { Post } from '../blog.vm';
import { mapIssueListAMToVM } from '../blog.mappers';
import { GetPostsListResponse } from './blog.api-model';
import { getPosts } from './blog.api';

export const usePostsList = (): { posts: Post[]; loading: boolean } => {
  const isMounted = useComponentIsMounted();

  const [posts, setPosts] = React.useState<Post[]>([]);
  const { loading, error, data } = useQuery<GetPostsListResponse>(getPosts());

  React.useEffect(() => {
    if (!loading) {
      error && console.error(error);
      data && isMounted && setPosts(mapIssueListAMToVM(data?.repository?.issues?.nodes));
    }
  }, [loading, error, data]);

  return {
    loading,
    posts,
  };
};
