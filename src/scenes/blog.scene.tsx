import React from 'react';
import { AppLayout } from '@/layouts';
import { Container } from '@/common/components';
import { BlogContainer } from '@/pods/blog';

export const BlogScene = () => (
  <AppLayout>
    <Container>
      <BlogContainer />
    </Container>
  </AppLayout>
);
