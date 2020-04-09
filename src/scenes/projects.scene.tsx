import React from 'react';
import content from 'content/es/projects.md';
import { AppLayout } from '@/layouts';
import { MarkdownViewer, Container } from '@/common/components';

export const ProjectsScene = () => (
  <AppLayout>
    <Container>
      <MarkdownViewer content={content} />
    </Container>
  </AppLayout>
);
