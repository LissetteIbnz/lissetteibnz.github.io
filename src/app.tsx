import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from '@apollo/react-hooks';
import { ErrorBoundary, Loader, LoaderProvider } from '@/common/components';
import { RouterComponent } from '@/core/router';
import { ThemeProvider } from '@/core/theme';
import { client } from '@/core/api';

const App: React.FC = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <ErrorBoundary>
          <LoaderProvider>
            <Loader />
            <RouterComponent />
          </LoaderProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

export default hot(App);
