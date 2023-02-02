/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>Pipeline | Repped In Tech</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
