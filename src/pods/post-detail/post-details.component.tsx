import React from 'react';
import { CenteredLayout } from '@/layouts';
import { MarkdownViewer, Loader } from '@/common/components';
import { usePost } from './api';

interface PostDetailsProps {
  issueNumber: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ issueNumber }) => {
  const { post, loading } = usePost(issueNumber);

  return (
    <Loader loading={loading}>
      <CenteredLayout>
        <h1>{post?.title}</h1>
        {post?.content && <MarkdownViewer content={post.content} />}
      </CenteredLayout>
    </Loader>
  );
};
