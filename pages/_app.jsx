import '../styles/globals.css';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func, // React FC
  pageProps: PropTypes.object
};

export default MyApp;
