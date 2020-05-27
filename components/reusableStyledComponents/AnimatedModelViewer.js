import React, { useContext, useEffect, useState } from 'react';

import Head from 'next/head';

const AnimatedModelViewer = ({ model }) => {
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
          src={model.animatedGlbFile}
          alt={model.name}
          preload
          auto-rotate
          camera-controls
          exposure={0.5}
          autoplay></model-viewer>
      </div>
      <style jsx global>{`
        .model-viewer-container {
          padding: 20px 0;
        }
        model-viewer {
          width: 100%;
          height: 750px;
          margin: 0 auto;
          --poster-color: transparent;
        }
      `}</style>
    </>
  );
};

export default AnimatedModelViewer;
