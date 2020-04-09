import React from 'react';
import { Blog } from '@/pods/blog';
import { AppLayout } from '@/layouts';
import { Container } from '@/common/components';

export const BlogScene = () => (
  <AppLayout>
    <Container>
      <Blog />
    </Container>
  </AppLayout>
);
