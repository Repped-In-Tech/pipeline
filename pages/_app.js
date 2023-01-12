/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
