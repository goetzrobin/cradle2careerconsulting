import '../styles/globals.scss'
import 'keen-slider/keen-slider.min.css';
import {useEffect} from 'react';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
