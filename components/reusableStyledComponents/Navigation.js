import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import theme from '../../utilities/theme';

const Navigation = ({ collapsed }) => {
  return (
    <>
      <div className={collapsed ? 'navigation-container collapsed' : 'navigation-container'}>
        <Link href='#introduction'>
          <a>INTRODUCTION</a>
        </Link>
        <Link href='#introduction'>
          <a>3D MODEL</a>
        </Link>
        <Link href='#introduction'>
          <a>ABOUT US</a>
        </Link>
      </div>
      <style jsx>{`
        .navigation-container {
          display: flex;
          flex-direction: row;
          justify-content: start;
          align-items: start;
          margin-top: 50px;
        }
        a {
          font-weight: 100;
          padding: 10px 20px 10px 0;
          text-decoration: none;
          color: ${theme.colors.black};
        }
        .collapsed a {
          color: white;
        }
        /* Small (sm) */
        @media (max-width: 640px) {
          /* ... */
          .navigation-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
