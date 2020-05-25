import React, { useContext, useEffect, useState } from 'react';

import ModelViewer from '../../../ModelViewer';

const BrandMainSection = ({ model }) => {
  return (
    <>
      <div className='main-container'>
        <h1>Main</h1>
        <ModelViewer model={model} />
      </div>
      <style jsx>{`
        .main-container {
          min-height: 80vh;
        }
      `}</style>
    </>
  );
};

export default BrandMainSection;
