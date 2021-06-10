import '../styles/globals.css';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func, // React FC
  pageProps: PropTypes.object
};

export default MyApp;
