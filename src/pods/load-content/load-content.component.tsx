import React from 'react';
import { CenteredLayout } from '@/layouts';
import { MarkdownViewer } from '@/common/components';

type LoadContentProps = { content: string };
export const LoadContent = ({ content }: LoadContentProps) => (
  <CenteredLayout>
    <MarkdownViewer content={content} />
  </CenteredLayout>
);
