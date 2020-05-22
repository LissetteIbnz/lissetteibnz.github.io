import React from 'react';
import content from 'content/es/projects.md';
import { MarkdownViewer, Container } from '@/common/components';

export const ProjectsScene = () => (
  <Container>
    <MarkdownViewer content={content} />
  </Container>
);
