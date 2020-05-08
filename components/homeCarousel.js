import React, { useContext, useEffect, useRef, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Carousel from 'react-multi-carousel';
// import CloseSVG from '../assets/icons/icon_close';
// import Fade from './FadeOut';
import { FirebaseContext } from '../utilities/context/firebase';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ModalContext } from '../utilities/context/modal';
// import PhotoCarouselFullScreenPhoto from './PhotoCarouselFullScreenPhoto';
// import TagFilledSVG from '../assets/icons/icon_tag_filled';
import theme from '../utilities/theme';

if (process.browser) {
  const body = document.querySelector('body');
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 40,
  },
};

const MainPageCarousel = ({ title, product, brand }) => {
  const carouselRef = useRef();
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const { dbh } = useContext(FirebaseContext);

  const {
    sliderPhotos,
    sliderPhotoIndex,
    setOpenFullScreenSlider,
    openFullScreenSlider,
    setSliderPhotos,
  } = useContext(ModalContext);

  const checkPhotos = () => {
    setLoading(true);
    dbh
      .collection('userPhotos')
      .where('tag', '==', product)
      .onSnapshot((querySnapshot) => {
        let tempItems = [];
        querySnapshot.docs.forEach((doc) => {
          // const url = doc.data().url.replace('/yzed/', '/yzed/300x200/');
          tempItems.push({ id: doc.id, ...doc.data() });
        });
        setPhotos(tempItems);
        setLoading(false);
      });
  };

  useEffect(() => {
    checkPhotos();
    return () => {
      checkPhotos();
    };
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className='carousel-container'>
        <div className='carousel-section'>
          <h2>
            {/* <TagFilledSVG /> */}
            <span>{brand}</span> {title}
          </h2>{' '}
          <LazyLoadComponent>
            <Carousel ref={carouselRef} responsive={responsive} partialVisible swipeable>
              {photos.map((photo, index) => (
                <div
                  className={
                    openFullScreenSlider.length === 0
                      ? 'slider-cell-content'
                      : 'hidden-slider-cell-content'
                  }
                  key={photo.id}
                  onClick={() => {
                    disableBodyScroll(body);
                    setOpenFullScreenSlider(index);
                    setSliderPhotos(photos);
                  }}>
                  <img src={photo.url} alt={photo.id} rel='preload' className='carousel-photo' />
                </div>
              ))}
            </Carousel>
          </LazyLoadComponent>
        </div>
      </div>
      <style jsx>
        {`
          .carousel-container {
            font-family: ${(props) => props.theme.fonts.main};
            font-weight: 300;
          }
          .carousel-section {
            margin: 30px 0;
            padding-bottom: 20px;
          }
          .carousel-section h2 {
            font-size: 1.2rem;
            font-weight: 300;
            text-align: left;
            padding-left: 20px;
          }
          .carousel-section img {
            height: 16px;
            vertical-align: middle;
            margin-right: 10px;
          }
          .carousel-section span {
            font-weight: 700;
          }

          .selected-user {
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            box-shadow: ${theme.boxShadows.allAround};
            width: 300px;
            margin: 0 auto;
          }
          .selected-user svg {
            width: 70%;
            margin: 15%;
          }
          .selected-user a .user-data-content {
            color: ${theme.colors.black};
            text-decoration: none;
          }
          .user-information {
            padding: 0 40px 20px;
          }
          .user-data {
            margin-top: 5px;
            display: grid;
            grid-template-columns: 1fr 4fr;
            align-items: center;
            text-align: left;
            grid-gap: 10px;
          }
          .user-data h4,
          .user-data h5 {
            font-family: ${(props) => props.theme.fonts.main};
            margin: 3px auto;
            color: ${(props) => props.theme.colors.black};
          }
          .user-data h4 {
            font-size: 1.2rem;
          }
          .user-data h5 {
            font-size: 1.1rem;
            font-weight: 300;
          }
          a {
            text-decoration: none;
          }
          .hidden-slider-cell-content {
            opacity: 0;
          }
        `}
      </style>
      <style jsx global>
        {`
          .slider-cell-content {
            animation: fadein 1s;
          }
          .slider-cell-content img {
            background: #7f7fd5;
            background: -webkit-linear-gradient(to top, #91eae4, #86a8e7, #7f7fd5);
            background: linear-gradient(to top, #91eae4, #86a8e7, #7f7fd5);
            background-size: 100% 100%;
            width: 92%;
            min-height: 320px;
          }
          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export const FullScreenSlider = ({
  sliderPhotos,
  setOpenFullScreenSlider,
  userData,
  openFullScreenSlider,
}) => {
  const fullScreenRef = useRef();

  const fullResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (fullScreenRef) {
      fullScreenRef.current.goToSlide(openFullScreenSlider);
    }
  }, [fullScreenRef]);

  return (
    <>
      <div className='full-screen-slider' key='full-screen-slider'>
        <Fade show={openFullScreenSlider.length === 0 ? false : true}>
          <div
            className='carousel'
            onClick={() => {
              enableBodyScroll(body);
              setOpenFullScreenSlider('');
            }}>
            <section
              className='top'
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <div className='title'>
                <h1>Today's Timeline</h1>
                <h2>Swipe to explore more!</h2>
              </div>
              <button
                className='close'
                onClick={() => {
                  enableBodyScroll(body);
                  setOpenFullScreenSlider('');
                }}>
                <CloseSVG fill='#fff' />
              </button>
            </section>
            <section
              className='main-carousel'
              onClick={(e) => {
                e.stopPropagation();
              }}>
              {/* <Carousel ref={fullScreenRef} responsive={fullResponsive} swipeable>
              {sliderPhotos.map((photo) => (
                <PhotoCarouselFullScreenPhoto
                  key={photo.id}
                  photo={photo}
                  setOpenFullScreenSlider={setOpenFullScreenSlider}
                  userData={userData}
                />
              ))}
            </Carousel> */}
            </section>
          </div>
        </Fade>
      </div>
      <style jsx>
        {`
          .full-screen-slider {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1500;
            background: #272727f9;
            height: 100vh;
            width: 100%;
            font-family: ${(props) => props.theme.fonts.main};
          }
          .carousel {
            width: 500px;
            max-width: 95%;
            height: 100vh;
            position: relative;
            margin: 0 auto;
            background: none;
            border: none;
          }
          .top {
            color: ${(props) => props.theme.colors.white};
            text-align: left;
            width: 325px;
            margin: 10px auto 20px;
            display: grid;
            grid-template-columns: 1fr 40px;
            align-items: center;
          }
          .top h1,
          .top h2 {
            padding: 0;
            margin: 0;
          }
          .top h1 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          .top h2 {
            font-size: 1.1rem;
            font-weight: 300;
          }
          .top button {
            height: 40px;
            width: 40px;
            background: none;
            border: 1px solid ${(props) => props.theme.colors.white};
            border-radius: 50%;
          }
          button img {
            margin-top: 3px;
            height: 14px;
          }

          @media (max-width: 350px) {
            .top {
              max-width: 95%;
            }
            .carousel {
              height: 90vh;
            }
          }
          @media (orientation: landscape) and (max-width: 900px) {
            .title h1 {
              font-size: 0.8rem;
            }
            .title h2 {
              font-size: 0.6rem;
            }
            .top button.close {
              height: 20px;
              width: 20px;
            }
            .top img {
              margin-top: 3px;
              margin-left: -3px;
              height: 10px;
            }
          }

          .carousel {
            height: 90vh;
          }
        `}
      </style>
    </>
  );
};

export default MainPageCarousel;
