import React, { useContext } from 'react';

import { FirebaseContext } from '../utilities/context/firebase';
import Head from 'next/head';
import Layout from '../components/layout';
import ModelViewer from '../components/modelviewer';

export default function Home() {
  const { userData } = useContext(FirebaseContext);

  return (
    <div className='container'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main>
          <ModelViewer />
        </main>
      </Layout>
      <style jsx>{``}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
