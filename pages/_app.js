// import App from 'next/app';
import FirebaseProvider from '../utilities/context/firebase';
import Head from 'next/head';
import ModalProvider from '../utilities/context/modal';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700,900&display=swap'
          rel='stylesheet'
          prefetch
        />
      </Head>
      <FirebaseProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
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
