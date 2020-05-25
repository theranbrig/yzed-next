import React, { useContext, useEffect, useState } from 'react';

import { FirebaseContext } from '../../utilities/context/firebase';
import Head from 'next/head';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingSpinner from '../../components/LoadingSpinner';
import ModelViewer from '../../components/ModelViewer';
import { ModalContext } from '../../utilities/context/modal';

// import Share from '../components/Share';
// import ShareSVG from '../assets/icons/icon_share';
// import ThreeDSVG from '../assets/icons/icon_ar_toggle';
import { motion } from 'framer-motion';

import { useRouter } from 'next/router';

// const LoadingContainer = styled.div`
//   min-height: 100vh;
//   width: 500px;
//   max-width: 100%;
//   margin: 0 auto;
//   margin-top: calc(10vh);
//   background: ${(props) => props.theme.colors.white};
//   position: relative;
// `;

// const ProductContainer = styled.div`
//   min-height: 90vh;
//   width: 500px;
//   max-width: 100%;
//   margin: 0 auto;
//   margin-top: calc(10vh);
//   font-family: ${(props) => props.theme.fonts.main};
//   /* NEEDS TO BE CHANGED BACK TO GREY WHEN ADDING IN SELECT SIZE STYLES */
//   /* background: ${(props) => props.theme.colors.lightGrey}; */
//   background: ${(props) => props.theme.colors.white};
//   position: relative;
//   model-viewer {
//     width: 85%;
//     height: 400px;
//     margin: 0 auto;
//   }
//   h1,
//   h3 {
//     width: 95%;
//     margin: 0 auto;
//     text-transform: uppercase;
//   }

//   h1 {
//     margin-bottom: 30px;
//     font-weight: 300;
//   }
//   div.ar-pic {
//     position: relative !important;
//     top: 0;
//     left: 0;
//     img {
//       position: relative;
//       border: 1px solid ${(props) => props.theme.colors.lightGrey};
//     }
//     svg {

//       width: 60px;
//       height: 60px;
//       display: block;
//       margin: 0 auto;
//       position: absolute;
//       top: calc(50% - 30px);
//       left: calc(50% - 30px);
//       stroke: rgba(255, 255, 255, 0.70);
//       stroke-width: 0.4px;
//       stroke-linejoin: round;
//       /* -webkit-filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.90));
//       filter: drop-shadow(0px 0px 1px  rgba(255, 255, 255, 0.90)); */
//     }
//   }
//   button {
//     display: block;
//     margin: 40px auto;
//   }
//   .picture-thumbs {
//     width: 95%;
//     margin: 10px auto;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-auto-rows: 1fr;
//     grid-gap: 15px;
//     img {
//       width: 100%;
//       border: 1px solid ${(props) => props.theme.colors.lightGrey};
//     }
//   }
//   .selected-photo {
//     border: 1px solid ${(props) => props.theme.colors.black} !important;
//   }
//   .main-content-box {
//     text-align: center;
//     height: 400px;
//     img {
//       height: 400px;
//     }
//   }
//   .title-section {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     padding-top: 25px;
//     .title-name {
//       width: 100%;
//       @media (max-width: 480px) {
//         h1 {
//           font-size: 1.4rem;
//         }
//       }
//     }
//     .title-price {
//       text-align: right;
//       margin-right: 2.5%;
//       h2 {
//         font-size: 1.1rem;
//       }
//     }
//   }
//   .accordions {
//     position: relative;
//     top: 0px;
//     margin: 30px 0 0;
//     padding: 50px 0;
//     background: ${(props) => props.theme.colors.white};
//     border-radius: 50px;
//     z-index: 400;
//     box-shadow: 0 -6px 6px -6px ${(props) => props.theme.colors.grey},
//       0 6px 6px -6px ${(props) => props.theme.colors.grey};
//     ul {
//       list-style-type: none;
//       padding: 0px;
//       li {
//         margin: 10px 20px;
//       }
//     }
//   }
//   .accordions img {
//     width: 95%;
//     margin: 0 2.5%;
//   }
//   .accordions p {
//     width: 95%;
//     margin: -70px 2.5% 20px;
//     font-weight: 300;
//   }
//   .back-button {
//     background: ${(props) => props.theme.colors.white};
//     padding: 20px;
//     .back-button button {
//       margin-top: 10px;
//       border: none;
//       background: white;
//       color: green;
//       .fa-chevron-left {
//         font-size: 1.4rem;
//       }
//     }
//   }
//   .product-information {
//     li {
//       font-weight: 300;
//     }
//   }
//   .product-top {
//     /* FOR ROUNDED BORDERS WITH ADD TO CART */
//     /* padding-bottom: 40px; */
//     /* margin-bottom: 50px;
//     border-bottom-right-radius: 50px;
//     border-bottom-left-radius: 50px; */
//     margin-top: 0;
//     background: ${(props) => props.theme.colors.white};
//     /* box-shadow: 0 6px 6px -6px ${(props) => props.theme.colors.grey}; */
//   }
//   .order-details {
//     margin-top: -90px;
//     padding: 70px 0 50px;
//     z-index: 10;
//     position: relative;
//   }
//   .buttons {
//     display: grid;
//     grid-template-columns: 1fr 2fr 1fr;
//     justify-content: center;
//     align-items: center;
//     padding-bottom: 20px;
//     .left, .right {
//       width: 50px;
//     }
//     .right {
//       button {
//         border: 1px solid ${(props) => props.theme.colors.lightGrey};
//         background: none;
//         height: 45px;
//         width: 45px;
//         border-radius: 50%;
//         margin: 0 0 5px;
//         svg {
//           height: 20px;
//           vertical-align: middle;
//           margin-left: -2px;
//         }
//       }
//       p {
//         font-size: 0.8rem;
//         margin: 0;
//       }
//     }
//   }
// `;

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [mainDisplay, setMainDisplay] = useState('model');

  const router = useRouter();
  console.log(router);

  const { dbh } = useContext(FirebaseContext);
  const { openShareLinks, setOpenShareLinks, setBodyScroll } = useContext(ModalContext);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await dbh
        .collection('products')
        .doc(id)
        .get()
        .then((doc) => {
          const id = doc.id;
          const details = doc.data();
          setProduct({ id, ...details });
          setLoading(false);
        });
    };
    getData();
    window.scrollTo(0, 0);
  }, [dbh, id]);

  if (!product || loading)
    return (
      <LoadingContainer>
        <LoadingSpinner color='black' />
      </LoadingContainer>
    );

  return (
    <motion.div
      exit={{ opacity: 0, x: '-100vw' }}
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', ease: 'linear', duration: 1, mass: 0.5 }}>
      <ProductContainer>
        <Helmet>
          <title>YZED - {product && product.name.toUpperCase()}</title>
        </Helmet>
        {isAdded && <AddToCartSuccessModal setIsAdded={setIsAdded} />}
        <section className='product-top'>
          <div className='title-section'>
            <div className='title-name'>
              <h3>{product.brand}</h3>
              <h1>{product.name}</h1>
            </div>
            <div className='title-price'>
              {/* <h2>{`$${(product.price / 100).toFixed(2)}`}</h2> */}
            </div>
          </div>
          <div className='main-content-box'>
            {mainDisplay === 'model' ? (
              <MediaViewer product={product} displayLink={false} />
            ) : (
              <LazyLoadImage src={mainDisplay} />
            )}
          </div>
          <div className='picture-thumbs'>
            <div className='ar-pic'>
              <LazyLoadImage
                src={product.mainImage}
                onClick={() => setMainDisplay('model')}
                effect='blur'
                alt={product.mainImage}
                className={mainDisplay === 'model' ? 'selected-photo' : ''}
              />
              <ThreeDSVG setMainDisplay={setMainDisplay} fill='#272727' />
            </div>
            {product.pictures.map((image) => (
              <LazyLoadImage
                key={image}
                src={image}
                onClick={() => setMainDisplay(image)}
                effect='blur'
                className={mainDisplay === image ? 'selected-photo' : ''}
                alt={image}
              />
            ))}
          </div>
          <div className='buttons'>
            <div className='left' />
            <RoundARButton onClick={() => document.querySelector('model-viewer').activateAR()}>
              <span>VIEW IN</span>
              <br />
              AR
            </RoundARButton>
            <div className='right'>
              <button
                aria-label='Share'
                onClick={() => {
                  setOpenShareLinks(product.id);
                  setBodyScroll(true);
                }}>
                <ShareSVG />
              </button>
              <p>SHARE</p>
            </div>
          </div>
        </section>
      </ProductContainer>
    </motion.div>
  );
};

export default Product;
