import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from '@apollo/react-hooks';
import { ErrorBoundary, Loader, LoaderProvider } from '@/common/components';
import { RouterComponent } from '@/core/router';
import { ThemeProvider } from '@/core/theme';
import { client } from '@/core/api';
import './app.globalStyles';

const App: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <LoaderProvider>
            {/* <Loader /> */}
            <RouterComponent />
          </LoaderProvider>
        </ThemeProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

export default hot(App);
