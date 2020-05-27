import React, { useContext, useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ModelViewer from '../../../ModelViewer';
import theme from '../../../../utilities/theme';
import MobileCarousel from '../../../ImageCarousel';
import StationaryModelViewer from '../../../reusableStyledComponents/StationaryModelViewer';
import ModelViewerController from '../../../reusableStyledComponents/ModelViewerController';

const photos = ['testimg_1-min.jpg', 'testimg_2-min.jpg', 'testimg_3-min.jpg'];

const BrandMainSection = ({ model }) => {
  const [lightMode, setLightMode] = useState(false);
  const photos = [
    {
      id: `${model.name} Detail View 1`,
      mini: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_1_mini.jpg`,
      thumb: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_1_thumb.jpg`,
      max: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_1_max.jpg`,
    },
    {
      id: `${model.name} Detail View 2`,
      mini: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_2_mini.jpg`,
      thumb: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_2_thumb.jpg`,
      max: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_2_max.jpg`,
    },
    {
      id: `${model.name} Detail View 3`,
      mini: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_3_mini.jpg`,
      thumb: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_3_thumb.jpg`,
      max: `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_3_max.jpg`,
    },
  ];

  return (
    <>
      <div className={lightMode ? 'light main-container' : 'main-container'}>
        <ModelViewerController model={model} lightMode={lightMode} setLightMode={setLightMode} />
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
        .light.main-container {
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
        }
        .brand-title {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.5rem;
          font-family: ${theme.fonts.main};
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
        .light .dash {
          border-color: ${theme.colors.black};
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
