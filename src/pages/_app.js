import './app.scss';
import Head from 'next/head';

function SlicknodeApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Headless CMS Slicknode Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default SlicknodeApp;
