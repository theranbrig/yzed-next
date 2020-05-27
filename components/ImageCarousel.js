import React, { useEffect, useContext, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import { useModal, Modal } from 'react-morphing-modal';

import ProgressiveImage from './ProgressiveImage';

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

const Image = ({ openModal, photo, setCurrentImage }) => {
  const btnRef = useRef(null);

  const handleClick = () => {
    setCurrentImage({ mini: photo.mini, max: photo.max });
    openModal(btnRef);
  };
  return (
    <>
      <img ref={btnRef} src={photo.thumb} alt={photo.id} onClick={() => handleClick()} />
      <style jsx>{`
        img {
          object-fit: contain;
          border: 1px solid white;
          width: 100%;
        }
      `}</style>
    </>
  );
};

const ImageCarousel = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState({ mini: '', max: '' });

  const { modalProps, open } = useModal({ background: '#0d0d0df9' });

  return (
    <>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        swipeable={true}
        ssr={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}>
        {photos.map((photo) => {
          const ref = useRef(null);
          return (
            <div ref={ref} className='photo-wrapper' key={photo.id}>
              <Image openModal={open} photo={photo} setCurrentImage={setCurrentImage} />
            </div>
          );
        })}
      </Carousel>
      <Modal {...modalProps}>
        <div className='modal-image-container'>
          <ProgressiveImage preview={currentImage.mini} image={currentImage.max} />
        </div>
      </Modal>
      <style jsx>{`
        .photo-wrapper {
          width: 95%;
          margin: 0 auto;
        }
        .modal-image-container img {
          border: 1px solid white;
          margin: 5px;
        }
        .modal-image-container {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        .photo-wrapper {
          width: 98%;
          margin: 0 auto;
        }
        .modal-image-container img {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default ImageCarousel;
