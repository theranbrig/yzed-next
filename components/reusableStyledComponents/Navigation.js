import React, { useContext, useEffect, useState } from 'react';

import theme from '../../utilities/theme';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navigation = ({ collapsed }) => {
  return (
    <>
      <div className={collapsed ? 'navigation-container collapsed' : 'navigation-container'}>
        <nav>
          <Link
            to='introduction'
            spy={true}
            smooth={true}
            duration={250}
            className='nav-scroll-link'
            activeClass='active'>
            INTRODUCTION
          </Link>
          <Link
            to='model'
            spy={true}
            smooth={true}
            duration={250}
            className='nav-scroll-link'
            activeClass='active'>
            3D MODEL
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={250}
            className='nav-scroll-link'
            activeClass='active'>
            <a>ABOUT US</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .navigation-container {
          display: flex;
          flex-direction: row;
          justify-content: start;
          align-items: start;
          margin-top: 50px;
        }

        /* Small (sm) */
        @media (max-width: 640px) {
          .navigation-container {
            display: none;
          }
        }
      `}</style>
      <style jsx global>{`
        a.nav-scroll-link {
          font-weight: 100;
          padding: 10px 0px 2px 0;
          margin-left: 20px;
          text-decoration: none;
          color: ${theme.colors.black};
        }
        .collapsed a.nav-scroll-link {
          color: ${theme.colors.white};
        }
        a.active {
          border-bottom: 0.5px solid;
        }
      `}</style>
    </>
  );
};

export default Navigation;
