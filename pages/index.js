import React, { useContext, useEffect, useState } from 'react';

import { FirebaseContext } from '../utilities/context/firebase';
import Head from 'next/head';
import Layout from '../components/layout';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Link from 'next/link';
// import LoadingSpinner from '../components/LoadingSpinner';
// import { LocationContext } from '../context/Location';
import MainPageCarousel from '../components/homeCarousel';
import ModelViewer from '../components/modelViewer';
// import { formatPrice } from '../utilities/formatting';
import moment from 'moment';
import { motion } from 'framer-motion';
import theme from '../utilities/theme';
import LoadingSpinner from '../components/loadingSpinner';

const Home = () => {
  const [mainProduct, setMainProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayDate, setDisplayDate] = useState('');
  const { dbh, userData } = useContext(FirebaseContext);
  // const { currentMarker } = useContext(LocationContext);
  const currentMarker = null;

  useEffect(() => {
    setLoading(true);
    dbh
      .collection('products')
      .doc(currentMarker ? currentMarker.model : process.env.home_product_id)
      .get()
      .then((doc) => {
        setMainProduct({ id: doc.id, ...doc.data() });
        setDisplayDate(moment().format('YYYY.MM.DD'));
        setLoading(false);
      });
  }, [currentMarker]);

  // if (loading)
  //   return (
  //     <Layout>
  //       <LoadingSpinner />
  //     </Layout>
  //   );

  return (
    <>
      <Layout>
        <motion.div
          exit={{ opacity: 0.5, x: '100vw' }}
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='page-container'>
            <Head>
              <title>YZED - HOME</title>
            </Head>
            {mainProduct ? (
              <>
                <div className='main-product-title'>
                  <div className='date-and-price'>
                    <h3>{displayDate}</h3>
                  </div>
                  <h3>
                    <strong>{mainProduct.brand}</strong> {mainProduct.name}
                  </h3>
                </div>
                <div className='model-viewer-container'>
                  <ModelViewer model={mainProduct} />
                </div>
              </>
            ) : (
              <div className='model-viewer-container-no-model'>
                <LoadingSpinner />
              </div>
            )}
            <section className='product-buttons'>
              <div className='square-area'></div>
              <button
                className='round-ar-button'
                aria-label='Start AR'
                onClick={() => {
                  document.querySelector('model-viewer').activateAR();
                }}>
                <span>VIEW IN</span>
                <br />
                AR
              </button>
              <div className='product-link'>
                <Link href={mainProduct ? `/item/${mainProduct.id}` : '/featured'}>
                  <a>View product</a>
                </Link>
                <img src='/icons/chevron-right.svg' alt='chevron right' />
              </div>
            </section>
            <section className='discover-box'>
              <h3>Discover YZED.</h3>
              <div className='down-arrow' />
            </section>
            <LazyLoadComponent>
              <section className='connected-content'>
                <div className='join-section'>
                  <h3>
                    <strong>Explore</strong> AR
                  </h3>
                  <p>
                    Select objects from our wide catalogue and place them anywhere in real life with
                    the power of augmented reality.
                  </p>
                  <div className='black-button'>
                    <Link href='/featured'>
                      <a>EXPLORE AR</a>
                    </Link>
                  </div>
                </div>
                <div className='timeline'>
                  <h3>
                    <strong>Today's</strong> timeline
                  </h3>
                  <MainPageCarousel
                    brand='YZED'
                    title='DRESS & TUNIC'
                    product={process.env.home_product_carousel_1_id}
                  />
                  <MainPageCarousel
                    brand='YZED'
                    title='BODYSUIT & FOLD SKIRT'
                    product={process.env.home_product_carousel_2_id}
                  />
                </div>
              </section>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <footer>
                <div className='footer-content'>
                  <h3>
                    <strong>YZED</strong> Show it first
                  </h3>
                  <p>
                    YZED is a platform for creative consumers to engage with their favourite brands
                    through cutting edge technology.
                  </p>
                  {userData.loggedIn ? (
                    <div className='black-button'>
                      <Link href='/featured'>
                        <a>DISCOVER MORE</a>
                      </Link>
                    </div>
                  ) : (
                    <div className='black-button'>
                      <Link href='/register'>
                        <a>BECOME A YZER</a>
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </LazyLoadComponent>
          </div>
        </motion.div>
      </Layout>
      <style jsx>
        {`
          .page-container {
            margin: 0 auto;
            text-align: center;
            font-family: ${theme.fonts.main};
            color: ${theme.colors.black};
            width: 500px;
            max-width: 100%;
            min-height: 90vh;
            background: ${theme.colors.white};
          }
          .model-viewer-container {
            width: 500px;
            height: 300px;
          }
          .model-viewer-container-no-model {
            width: 500px;
            height: 391px;
            max-width: 90%;
            margin: 0 auto;
            display: grid;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 576px) {
            .page-container {
              width: 100% !important;
            }
          }
          .main-product-title {
            width: 450px;
            text-align: left;
            margin: 20px auto;
          }
          @media (max-width: 576px) {
            .main-product-title {
              max-width: 90%;
            }
          }
          .date-and-price {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .date-and-price h3,
          .date-and-price h4 {
            margin: 0;
            font-size: 1rem;
          }
          .date-and-price h3 {
            color: ${theme.colors.grey};
          }
          .date-and-price h4 {
            color: ${theme.colors.black};
            font-weight: 700;
          }
          .main-product-title h3 {
            font-weight: 400;
            margin: 0 0 10px;
          }
          .main-product-title h4 {
            font-weight: 400;
            margin-bottom: 50px;
            margin-top: 10px;
            color: ${theme.colors.grey};
          }
          .round-ar-button {
            border: 2px solid ${theme.colors.white};
            border-radius: 0px;
            height: 75px;
            width: 75px;
            line-height: 16px;
            padding: 0 0 4px 0;
            display: block;
            font-size: 20px;
            font-weight: 600;
            border-radius: 50%;
            text-align: center;
            font-family: ${theme.fonts.main};
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            box-shadow: 0 0 0 8px ${theme.colors.black}, 0 0 2px 9px ${theme.colors.grey};
          }
          .round-ar-button span {
            font-weight: 300;
            font-size: 12px;
            color: white;
          }
          .discover-box {
            color: ${theme.colors.mediumGrey};
          }
          .discover-box h3 {
            font-size: 0.9rem;
            margin: 50px 0 0;
            letter-spacing: 0.1rem;
            font-weight: 400;
          }
          .discover-box img {
            height: 150px;
          }
          .product-buttons {
            padding: 10px 0;
            width: 95%;
            margin: 20px auto 0;
            display: grid;
            grid-template-columns: 110px 1fr 110px;
            justify-items: center;
            align-content: center;
          }
          .product-link {
            position: relative;
            width: 110px;
            height: 25px;
            align-self: center;
          }
          .product-link a {
            color: ${theme.colors.grey};
            height: 16px;
            text-decoration: none;
            height: 1rem;
            font-size: 0.9rem;
            line-height: 1rem;
            padding: 3px 0;
          }
          .product-link a:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 6%;
            height: 1px;
            background: ${theme.colors.grey};
            display: block;
            width: 90px;
          }
          .product-link img {
            height: 0.7rem;
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
          }
          .down-arrow {
            width: 15px;
            height: 15px;
            transform: rotate(45deg);
            border-bottom: 2px solid ${theme.colors.mediumGrey};
            border-right: 2px solid ${theme.colors.mediumGrey};
            margin: 0 auto;
            margin-bottom: 20px;
          }
          .square-area {
            width: 100px;
          }
          .square-area button {
            align-self: center;
          }
          @media (max-width: 350px) {
            .product-buttons {
              grid-template-columns: 90px 1fr 90px;
            }
            .product-link {
              width: 90px;
            }
            .product-link a {
              font-size: 0.75rem;
            }
            .product-link a:after {
              width: 70px;
            }
            img {
              height: 0.6rem;
            }
          }
          .join-section {
            width: 80%;
            font-family: ${theme.fonts.main};
            background: url('https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/bg_home_1.jpg');
            background-size: cover;
            padding-top: 50px;
            padding-bottom: 80px;
            color: ${theme.colors.black};
            margin: 0 auto;
            width: 100%;
          }
          .join-section h3 {
            margin-top: 30px;
            font-size: 1.8rem;
            font-weight: 300;
          }
          .join-section h3 strong {
            font-weight: 700;
          }
          .join-section p {
            font-weight: 300;
            font-size: 1.1rem;
            padding: 0 7.5%;
          }
          .black-button {
            width: 200px;
            border: 2px solid ${theme.colors.black};
            border-radius: 25px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            height: 45px;
            letter-spacing: 0.1rem;
            display: block;
            margin: 0 auto;
            background: ${theme.colors.black};
            font-size: 1rem;
            font-weight: 700;
            font-family: ${theme.fonts.main};
            margin: 0 auto 30px;
            vertical-align: middle;
          }
          .black-button a {
            color: ${theme.colors.white};
            text-decoration: none;
          }
          .black-button a:hover {
            color: ${theme.colors.grey};
          }
          .timeline {
            position: relative;
            margin-top: -70px;
            margin-bottom: -70px;
            width: 100%;
            border-radius: 50px;
            padding-bottom: 20px;
            background-color: ${theme.colors.white};
            box-shadow: 0 0 6px #27272722;
          }
          .timeline h3 {
            padding-top: 30px;
            font-size: 1.5rem;
            font-weight: 300;
          }
          .timeline strong {
            font-weight: 700;
          }
          footer .footer-content {
            font-family: ${theme.fonts.main};
            background: url('https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/bg_home_2.jpg');
            background-size: cover;
            padding: 20px 0 20px;
            color: ${theme.colors.black};
          }
          .footer-content h3 {
            margin-top: 80px;
            font-size: 1.8rem;
            font-weight: 300;
          }
          .footer-content h3 strong {
            font-weight: 700;
          }
          .footer-content p {
            width: 80%;
            font-size: 1.1rem;
            padding: 0 7.5%;
            font-weight: 300;
            margin: 20px auto;
          }
        `}
      </style>
      <style jsx global>
        {`
          model-viewer {
            width: 90%;
            height: 300px;
            margin: 0 auto;
            z-index: 0;
          }
          @media (max-width: 576px) {
            model-viewer {
              max-width: 80%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
