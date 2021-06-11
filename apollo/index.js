import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = process.env.GITHUB_API_TOKEN;

export const AUTH_HEADER = {
  authorization: token ? `Bearer ${token}` : null
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...AUTH_HEADER
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: 'https://api.github.com/graphql', fetch })
  ),
  cache: new InMemoryCache()
});

export default client;
