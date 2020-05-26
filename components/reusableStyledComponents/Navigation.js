import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import theme from '../../utilities/theme';
import ActiveLink from '../reusableStyledComponents/ActiveLink';

const Navigation = ({ collapsed }) => {
  return (
    <>
      <div className={collapsed ? 'navigation-container collapsed' : 'navigation-container'}>
        <a href='/#introduction'>INTRODUCTION</a>
        <a href='/#model'>3D MODEL</a>
        <a href='/#about'>ABOUT US</a>
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
      <style jsx global>{`
        a.selected {
          border-bottom: 1px solid;
        }
      `}</style>
    </>
  );
};

export default Navigation;
