import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../../utilities/theme';

const BrandFooter = () => {
  return (
    <>
      <div className='footer-container'>
        <p>
          <strong>YZED</strong> is part of{' '}
          <a href='https://101.global' target='_blank' rel='noopener noreferrer'>
            101Global
          </a>{' '}
          and powered by{' '}
          <a href='https://www.hanwha.com/en.html' target='_blank' rel='noopener noreferrer'>
            Hanwha
          </a>
        </p>
      </div>
      <style jsx>{`
        .footer-container {
          background-color: ${theme.colors.black};
        }
        p {
          padding: 10px 10%;
          color: ${theme.colors.white};
          font-weight: 100;
          margin: 0;
        }
        a,
        strong {
          color: ${theme.colors.white};
          font-weight: 500;
          text-decoration: none;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
};

export default BrandFooter;
