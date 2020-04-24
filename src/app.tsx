import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '@/services/api';
import { RouterComponent } from '@/core/router';
import { ErrorBoundary, LoaderProvider, Loader } from '@/common/components';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <LoaderProvider>
        <Loader />
        <RouterComponent />
      </LoaderProvider>
    </ErrorBoundary>
  </ApolloProvider>
);

export default hot(App);
