/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
