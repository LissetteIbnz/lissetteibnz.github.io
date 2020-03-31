import React from 'react';
import { CenteredLayout } from '@/layouts';
import { MarkdownViewer } from '@/common/components';
import document from '../../../content/es/projects.md';

export const Projects = () => (
  <CenteredLayout>
    <MarkdownViewer content={document} />
  </CenteredLayout>
);
