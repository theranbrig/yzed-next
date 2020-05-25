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
        <model-viewer
          src={model.glbFile}
          ios={model.usdzFile}
          alt={model.name}
          auto-rotate
          ar></model-viewer>
      </div>
      <style jsx global>{`
        model-viewer {
          width: 900px;
          height: 750px;
          max-width: 90%;
          margin: 0 auto;
          --poster-color: transparent;
          --progress-bar-color: #ffffff75;
        }
      `}</style>
    </>
  );
};

export default ModelViewer;
