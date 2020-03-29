import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from '@apollo/react-hooks';
import { RouterComponent } from '@/core/router';
import { client } from '@/core/api';
import { ErrorBoundary } from '@/common/components';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <RouterComponent />
    </ErrorBoundary>
  </ApolloProvider>
);

export default hot(App);
