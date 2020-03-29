import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MarkdownViewer } from '@/common/components';
import { GET_POST } from './blog-post.api';

export const BlogPost = () => {
  const [post, setPost] = React.useState(null);
  const [postNodeId, setPostNodeId] = React.useState('');
  const { loading, error, data } = useQuery(GET_POST);

  React.useEffect(() => {
    if (!loading) {
      if (data) {
        console.log('BlogPost -> data', data);
        const issues = data.repository.issue;
        setPostNodeId(issues.id);
        setPost(issues);
      }
    }
  }, [loading, error, data]);

  return <>{post?.title && <MarkdownViewer content={post.body} />}</>;
};
