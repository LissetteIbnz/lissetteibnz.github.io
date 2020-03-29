import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useComponentIsMounted } from '@/common/hooks';
import { GetPostResponse, GET_POSTS } from '.';
import { Post } from '../blog.vm';
import { mapIssueListAMToVM } from '../blog.mappers';

export const usePost = (): { posts: Post[]; loading: boolean } => {
  const isMounted = useComponentIsMounted();

  const [posts, setPosts] = React.useState<Post[]>([]);
  const { loading, error, data } = useQuery<GetPostResponse>(GET_POSTS);

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
