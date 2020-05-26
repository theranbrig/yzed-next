import React, { useEffect, useContext, useState } from 'react';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const MobileCarousel = ({ photos }) => {
  return (
    <>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        swipeable={true}
        ssr={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}>
        {photos.map((photo) => (
          <div className='photo-wrapper'>
            <img src={photo} alt={photo} />
          </div>
        ))}
      </Carousel>
      <style jsx>{`
        .photo-wrapper {
          width: 95%;
          margin: 0 auto;
        }
        .photo-wrapper img {
          object-fit: contain;
          border: 1px solid white;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default MobileCarousel;
