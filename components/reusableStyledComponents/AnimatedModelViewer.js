import React, { useContext, useEffect, useState, useRef } from 'react';

import Head from 'next/head';

const AnimatedModelViewer = ({ model }) => {
  const modelRef = useRef(null);
  useEffect(() => {
    console.log('LOAD', modelRef.current);
  }, []);
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
          ref={modelRef}
          src={model.animatedGlbFile}
          alt={model.name}
          preload
          auto-rotate
          camera-controls
          poster={'loading-image.png'}
          exposure={0.5}
          interaction-policy='allow-when-focused'
          autoplay></model-viewer>
      </div>
      <style jsx global>{`
        .model-viewer-container {
          padding: 20px 0;
          min-height: 200px;
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
