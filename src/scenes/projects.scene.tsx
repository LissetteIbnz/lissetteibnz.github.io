import React from 'react';
import content from 'content/es/projects.md';
import { AppLayout } from '@/layouts';
import { MarkdownViewer } from '@/common/components';

export const ProjectsScene = () => (
  <AppLayout>
    <MarkdownViewer content={content} />
  </AppLayout>
);
