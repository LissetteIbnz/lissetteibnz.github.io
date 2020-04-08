import React from 'react';
import content from 'content/es/aboutMe.md';
import { AppLayout } from '@/layouts';
import { MarkdownViewer } from '@/common/components';

export const AboutScene = () => (
  <AppLayout>
    <MarkdownViewer content={content} />
  </AppLayout>
);
