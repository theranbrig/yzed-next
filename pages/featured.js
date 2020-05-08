import React, { useContext, useEffect, useState } from 'react';

import { FirebaseContext } from '../utilities/context/firebase';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import LikeEmptySVG from '../assets/icons/icon_like_empty';
// import LikeFilledSVG from '../assets/icons/icon_like_filled';
import Link from 'next/link';
// import { formatPrice } from '../utilities/formatting';
import { motion } from 'framer-motion';
import Layout from '../components/layout';
import theme from '../utilities/theme';
import LoadingSpinner from '../components/loadingSpinner';

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { dbh, userData, userLoading, firebase } = useContext(FirebaseContext);

  const checkItems = () => {
    setLoading(true);
    dbh.collection('products').onSnapshot((querySnapshot) => {
      let tempProducts = [];
      querySnapshot.forEach((doc) => {
        let liked = false;
        if (userData.loggedIn) {
          liked = userData.favoriteProducts.some((product) => product === doc.id);
        }
        if (doc.data().featured) {
          tempProducts.push({ id: doc.id, ...doc.data(), liked });
        }
      });
      setProducts(tempProducts);
      setLoading(false);
    });
  };

  const likeProduct = (productId, liked) => {
    if (!liked) {
      dbh
        .collection('users')
        .doc(userData.id)
        .update({ favoriteProducts: firebase.firestore.FieldValue.arrayUnion(productId) });
    } else {
      dbh
        .collection('users')
        .doc(userData.id)
        .update({ favoriteProducts: firebase.firestore.FieldValue.arrayRemove(productId) });
    }
  };

  useEffect(() => {
    checkItems();
    return () => {
      checkItems();
    };
  }, [userData, userLoading]);

  return (
    <>
      <Layout>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='page-container'>
            <div className='title'>
              <h1>Featured Products</h1>
            </div>
            <div className='products'>
              {products.map((product) => (
                <div className='product' key={product.id}>
                  <button
                    aria-label='save to favorites'
                    disabled={!userData.loggedIn}
                    className='favorite'
                    onClick={() => {
                      likeProduct(product.id, product.liked);
                    }}>
                    {product.liked ? (
                      <img src='/icons/like-filled.svg' />
                    ) : (
                      <img src='/icons/like-empty.svg' />
                    )}
                  </button>
                  <Link href={`/item/${product.id}`}>
                    <a>
                      <LazyLoadImage
                        src={product.mainImage}
                        alt={product.name}
                        effect='blur'
                        placeholder={<div className='placeholder' className='product-image'></div>}
                      />
                      <h2>{product.brand}</h2>
                      <h3>{product.name}</h3>
                      {/* <h4>{formatPrice(product.price)}</h4> */}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Layout>
      <style jsx>
        {`
          .page-container {
            width: 500px;
            max-width: 95%;
            margin: 0 auto;
            min-height: 88%;
            padding-top: 2vh;
            font-family: ${theme.fonts.main};
          }
          .products {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 20px;
            padding-bottom: 50px;
          }

          .title {
            padding-top: 20px;
          }
          h1 {
            font-size: 1.5rem;
          }
        `}
      </style>
      <style jsx global>
        {`
          .product {
            width: 100%;
            margin: 20px auto;
            position: relative;
          }
          .product a {
            color: ${theme.colors.black};
            text-decoration: none;
            width: 100%;
          }
          .placeholder {
            width: 100%;
            height: 365px;
            background: #7f7fd5;
            background: -webkit-linear-gradient(to top, #91eae4, #86a8e7, #7f7fd5);
            background: linear-gradient(to top, #91eae4, #86a8e7, #7f7fd5);
          }
          .product img.product-image {
            border: 1px solid ${(props) => props.theme.colors.lightGrey};
            width: 100% !important;
            margin: 0 autimport LoadingSpinner from '../components/loadingSpinner';
o;
            background: #7f7fd5;
            background: -webkit-linear-gradient(to top, #91eae4, #86a8e7, #7f7fd5);
            background: linear-gradient(to top, #91eae4, #86a8e7, #7f7fd5);
            background-size: 100% 100%;
          }
          .product a h2,
          .product a h3,
          .product a h4 {
            margin: 0 auto;
            font-weight: 300;
          }
          .product a h2 {
            font-size: 1.1rem;
            font-weight: 600;
          }
          .product a h3 {
            font-size: 1rem;
          }
          .product a h4 {
            margin-top: 10px;
            font-size: 1.1rem;
          }
          .product button {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: ${(props) => props.theme.colors.white};
            position: absolute;
            border: none;
            box-shadow: 0 0 6px #27272727;
            top: 5px;
            right: 5px;
            z-index: 100;
          }
          .product>button>img {
            position: absolute;
            height: 18px;
            margin-top: 4px;
            top: 8px;
            left: 10px;
            background: none;
          }
          .lazy-load-image-background {
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default FeaturedProducts;
