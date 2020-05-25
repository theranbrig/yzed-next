import React, { useContext, useEffect, useState } from 'react';

import ModelViewer from '../../../ModelViewer';
import theme from '../../../../utilities/theme';

const BrandMainSection = ({ model }) => {
  return (
    <>
      <div className='main-container'>
        <ModelViewer model={model} />
        <div className='brand'>
          <div className='brand-title'>
            <h1>YZED x RESERVED Eco Aware</h1>
            <div className='dash'></div>
            <div className='about'>
              <p>Crushed viscose printed dress</p>
              <p>Cupro rich floral print blazer</p>
            </div>
          </div>
          <div className='brand-images'>
            <img src='yzed-logo.png' alt='image' />
            <img src='yzed-logo.png' alt='image' />
            <img src='yzed-logo.png' alt='image' />
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-container {
          min-height: 80vh;
          margin: 0 auto;
          background-color: ${theme.colors.black};
          padding: 0 10%;
          color: ${theme.colors.white};
          padding-bottom: 80px;
        }
        .brand-title {
          display: flex;
          flex-direction: row;
          align-items: center;

          font-size: 1.5rem;
          font-family: ${theme.fonts.main};
          color: ${theme.colors.white};
        }
        .brand-title h1 {
          font-weight: 500;
        }
        .brand-title p {
          font-size: 1rem;
          font-weight: 100;
          margin: 0;
        }
        .brand-images {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 225px;
          grid-gap: 20px;
        }
        .brand-images img {
          border: 1px solid white;
          width: 100%;
          height: 100%;
        }
        .dash {
          width: 80px;
          border-bottom: 1px solid ${theme.colors.white};
          margin: 0 30px;
        }
      `}</style>
    </>
  );
};

export default BrandMainSection;
