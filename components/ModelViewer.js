import React, { useContext, useEffect, useState } from 'react';

import Head from 'next/head';

const ModelViewer = ({ model }) => {
  return (
    <>
      <Head>
        <script
          type='module'
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer.js'></script>
        <script
          nomodule
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js'></script>
      </Head>
      <div className='model-viewer-container'>
        <model-viewer src={model.glbFile} ios={model.uszdFile}></model-viewer>
      </div>
      <style jsx global>{`
        model-viewer {
          background: transparent;
          width: 500px;
          height: 350px;
          max-width: 90%;
        }
      `}</style>
    </>
  );
};

export default ModelViewer;
