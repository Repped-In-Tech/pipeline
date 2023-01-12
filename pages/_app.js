/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
