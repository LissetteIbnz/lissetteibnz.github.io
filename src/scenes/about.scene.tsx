import React from 'react';
import content from 'content/es/aboutMe.md';
import { AppLayout } from '@/layouts';
import { MarkdownViewer, Container } from '@/common/components';

export const AboutScene = () => (
  <AppLayout>
    <Container>
      <MarkdownViewer content={content} />
    </Container>
  </AppLayout>
);
