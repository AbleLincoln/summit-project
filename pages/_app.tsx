// import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js'); // bootstrap js
  }, []);
  
  return <Component {...pageProps} />
}