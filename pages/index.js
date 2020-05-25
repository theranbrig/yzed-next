import React, { useContext, useEffect, useState } from 'react';

import BrandPageLayout from '../components/pageLayouts/Brand/Brand/BrandPageLayout';
import { FirebaseContext } from '../utilities/context/firebase';
import Layout from '../components/Layout';
import fetch from 'node-fetch';
import theme from '../utilities/theme';

const Home = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [displayDate, setDisplayDate] = useState('');
  const { dbh, userData } = useContext(FirebaseContext);
  const [mainProduct, setMainProduct] = useState({});

  const currentMarker = null;

  useEffect(() => {
    const model = {
      name: product.fields.name.stringValue,
      glbFile: product.fields.glbFile.stringValue,
      usdzFile: product.fields.usdzFile.stringValue,
      id: product.name.slice(59),
    };
    console.log(product);
    setMainProduct(model);
  }, [currentMarker]);

  return (
    <Layout title='YZED.me' loading={!mainProduct}>
      <BrandPageLayout model={mainProduct} />
    </Layout>
  );
};

export async function getStaticProps() {
  const product = await fetch(
    `https://firestore.googleapis.com/v1/projects/yzed-88819/databases/(default)/documents/products/${process.env.home_product_id}`,
    { cors: 'no-cors' }
  ).then((res) => res.json().then((data) => data));

  return {
    props: {
      product,
    },
  };
}

export default Home;
