import React, { useContext, useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
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
            <div className='photo-wrapper'>
              <img src='testimg_1.jpg' alt='image' effect='blur' wrapperClassName='brand-image' />
            </div>
            <div className='photo-wrapper'>
              <img src='testimg_2.jpg' alt='image' effect='blur' wrapperClassName='brand-image' />
            </div>
            <div className='photo-wrapper'>
              <img src='testimg_3.jpg' alt='image' effect='blur' wrapperClassName='brand-image' />
            </div>
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
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .photo-wrapper {
          width: 32%;
        }
        .photo-wrapper img {
          object-fit: contain;
          border: 1px solid white;
          width: 100%;
        }
        .dash {
          width: 80px;
          border-bottom: 1px solid ${theme.colors.white};
          margin: 0 30px;
        }
        @media (max-width: 640px) {
          .main-container {
            padding: 0px 5%;
          }
          .brand-title {
            flex-direction: column;
          }
          .dash {
            display: none;
          }
          .about {
            width: 100%;
            margin-bottom: 50px;
          }
          .brand-images {
            padding-bottom: 50px;
            flex-direction: column;
          }
          .photo-wrapper {
            width: 100%;
            margin: 20px 0;
          }
        }
      `}</style>
    </>
  );
};

export default BrandMainSection;
