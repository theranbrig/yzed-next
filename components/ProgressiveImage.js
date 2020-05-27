import React, { useEffect, useState } from 'react';

const ProgressiveImage = ({ preview, image }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = (src) => {
    setCurrentImage(preview);
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setTimeout(() => {
        setCurrentImage(loadingImage.src);
        setLoading(false);
      }, 500);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, [preview]);

  const style = (loading) => {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px)' : ''}`,
    };
  };

  return <img style={{ style }} src={currentImage} alt={currentImage} />;
};

export default ProgressiveImage;
