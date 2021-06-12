import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func, // React FC
  pageProps: PropTypes.object
};

export default MyApp;
