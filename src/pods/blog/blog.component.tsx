import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from './blog.api';
import { config } from '@/core/config';
import { CenteredLayout } from '@/layouts';

export const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  React.useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error);
      }

      if (data) {
        setPosts(data?.repository?.issues?.nodes);
      }
    }
  }, [loading, error, data]);

  return (
    <CenteredLayout>
      <h1>{config.title}</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </CenteredLayout>
  );
};
