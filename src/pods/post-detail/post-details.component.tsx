import React from 'react';
import { CenteredLayout } from '@/layouts';
import { MarkdownViewer } from '@/common/components';
import { usePost } from './api';

interface PostDetailsProps {
  issueNumber: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ issueNumber }) => {
  const { post } = usePost(issueNumber);

  return (
    <CenteredLayout>{post?.title && <MarkdownViewer content={post.content} />}</CenteredLayout>
  );
};
