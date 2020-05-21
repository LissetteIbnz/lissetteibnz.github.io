import ApolloClient from 'apollo-boost';
import { config } from '@/core/config';

const url = 'https://api.github.com/graphql';

export const client = new ApolloClient({
  uri: url,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${atob(config.githubConvertedToken)}`,
      },
    });
  },
});

export const userClient = (token: string) =>
  new ApolloClient({
    uri: url,
    request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    },
  });
