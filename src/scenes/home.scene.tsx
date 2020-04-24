import React from 'react';
import { AppLayout } from '@/layouts';
import { Container } from '@/common/components';
import { BlogContainer } from '@/pods/blog';

export const HomeScene = () => (
  <AppLayout>
    <Container>
      <BlogContainer />
    </Container>
  </AppLayout>
);
