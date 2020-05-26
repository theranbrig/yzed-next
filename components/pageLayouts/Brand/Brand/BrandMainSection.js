import React, { useContext, useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ModelViewer from '../../../ModelViewer';
import theme from '../../../../utilities/theme';
import MobileCarousel from '../../../MobileCarousel';

const photos = ['testimg_1-min.jpg', 'testimg_2-min.jpg', 'testimg_3-min.jpg'];

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
          <div className='mobile-carousel'>
            <MobileCarousel photos={photos} />
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
        .mobile-carousel {
          padding-bottom: 50px;
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
        }
      `}</style>
    </>
  );
};

export default BrandMainSection;
