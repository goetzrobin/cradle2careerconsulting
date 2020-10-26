import '../styles/globals.scss'
import 'keen-slider/keen-slider.min.css';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
