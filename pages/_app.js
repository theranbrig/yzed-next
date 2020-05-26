// import App from 'next/app';
import FirebaseProvider from '../utilities/context/firebase';
import Head from 'next/head';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-multi-carousel/lib/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta
          property='og:image'
          content='https://res.cloudinary.com/dq7uyauun/image/upload/q_auto/v1551968239/IMG_1880.jpg'
        /> */}

        {/* <meta
          property='twitter:image'
          content='https://res.cloudinary.com/dq7uyauun/image/upload/q_auto/v1551968239/IMG_1880.jpg'></meta> */}
        {/*
        <link rel='icon' type='image/x-icon' href='../static/favicon.ico' prefetch />
        <link rel='apple-touch-icon' sizes='180x180' href='../static/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='../static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='../static/favicon-16x16.png' /> */}
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#0D0D0D' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='YZED: A unique AR experience'></meta>
        <meta property='og:url' content='https:/yzed.me' />
        <meta property='og:title' content='YZED: A unique AR experience' />
        <meta property='og:description' content='YZED: Check out unique 3D and AR fashion.' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://yzed.me' />
        <meta property='twitter:title' content='YZED: A unique AR experience' />
        <meta property='twitter:description' content='YZED: Check out unique 3D and AR fashion.' />
        <link
          href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700,900&display=swap'
          rel='stylesheet'
          prefetch='true'
        />
        <link rel='manifest' href='../static/site.webmanifest' />
        {/* <link rel='manifest' href='/static/manifest.json' /> */}
      </Head>
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
