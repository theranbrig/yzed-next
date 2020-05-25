import React, { useContext, useEffect, useState } from 'react';

import Navigation from '../../../reusableStyledComponents/Navigation';
import theme from '../../../../utilities/theme';

const BrandHeader = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY > 3) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    });
  }, []);

  return (
    <>
      <div className={collapsed ? 'header-container collapsed' : 'header-container expanded'}>
        <div className='logo'>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 355 60'
            fill='#232323'
            className='filled-svg'>
            <g>
              <path
                class='st0'
                d='M81,44.9l41.8-29.8H88.4L92.2,0h67.7l-3.2,15.1l-41.2,29.8h37.1L148.6,60H78L81,44.9z'
              />
              <path
                class='st0'
                d='M87.1,0H58.8L39.5,28.9L32.6,0H4.4L17,44.9H4L0.4,60l21.3,0c22.6,0,36.1-19,36.1-19L87.1,0z'
              />
              <path
                class='st0'
                d='M243.7,0h46.2c20.4,0,29.3,7.9,24.9,30c-4.4,21.1-16.9,30-36.8,30h-46.7L243.7,0z M258.1,44.9h13.6
		c10.8,0,16.3-5.4,18.3-14.9c1.9-9.5-1.3-14.9-12.1-14.9h-13.6L258.1,44.9z'
              />
              <path
                class='st0'
                d='M170.5,0h63.8l-3,14.6h-40.1l-1.7,8.1h37.2l-3,14.6h-37.2l-1.7,8.1h40.1l-3,14.6h-63.8L170.5,0z'
              />
              <circle class='st0' cx='342.8' cy='47.9' r='12.1' />
            </g>
          </svg>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 355 60'
            fill='#232323'
            className='outline-svg'>
            <g>
              <path
                class='st0'
                d='M81,44.9l41.8-29.8H88.4L92.2,0h67.7l-3.2,15.1l-41.2,29.8h37.1L148.6,60H78L81,44.9z'
              />
              <path
                class='st0'
                d='M87.1,0H58.8L39.5,28.9L32.6,0H4.4L17,44.9H4L0.4,60l21.3,0c22.6,0,36.1-19,36.1-19L87.1,0z'
              />
              <path
                class='st0'
                d='M243.7,0h46.2c20.4,0,29.3,7.9,24.9,30c-4.4,21.1-16.9,30-36.8,30h-46.7L243.7,0z M258.1,44.9h13.6
		c10.8,0,16.3-5.4,18.3-14.9c1.9-9.5-1.3-14.9-12.1-14.9h-13.6L258.1,44.9z'
              />
              <path
                class='st0'
                d='M170.5,0h63.8l-3,14.6h-40.1l-1.7,8.1h37.2l-3,14.6h-37.2l-1.7,8.1h40.1l-3,14.6h-63.8L170.5,0z'
              />
              <circle class='st0' cx='342.8' cy='47.9' r='12.1' />
            </g>
          </svg>
        </div>
        <div className='right-content'>
          <Navigation collapsed={collapsed} />
          <div className='message'>
            <h2>We believe democratic fashion catalyzes self-discovery.</h2>
            <p>
              YZED is the view of four professionals from different backgrounds based in Seoul,
              South Korea represented by innovation hub 101Global.
            </p>
          </div>
          <div className='spacer' />
        </div>
      </div>
      <style jsx>{`
        .header-container {
          display: grid;
          grid-template-columns: 50% 50%;
          grid-gap: 20px;
          margin: 0 auto;
          padding: 0 10%;
          align-items: center;
          max-width: 100%;
          height: 350px;
          animation: expandBox 0.5s;
        }
        .collapsed {
          height: 200px;
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          animation: collapseBox 0.5s;
        }
        .collapsed .message {
          animation: collapseText 1s;
          display: none;
          opacity: 0;
        }
        .message {
          align-self: center;
          animation: expandText 1s;
        }
        .spacer {
          height: 69px;
        }
        .logo {
          width: 50%;
        }
        .right-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .collapsed svg {
          animation: collapseSvg 1s;
        }
        .logo svg {
          height: 60px;
        }
        .expanded .logo svg {
          height: 60px;
          animation: expandSvg 1s;
        }
        .collapsed .logo svg {
          fill: ${theme.colors.white};
          height: 40px;
        }
        .outline-svg {
          stroke-width: 2px;
          display: relative;
          margin: -20px 0 0 40px;
        }
        @keyframes collapseSvg {
          from {
            fill: ${theme.colors.black};
            height: 75px;
          }
          to {
            fill: ${theme.colors.white};
            height: 40px;
          }
        }
        @keyframes expandSvg {
          from {
            fill: ${theme.colors.white};
            height: 40px;
          }
          to {
            fill: ${theme.colors.black};
            height: 60px;
          }
        }
        @keyframes collapseBox {
          from {
            height: 350px;
          }
          to {
            height: 200px;
          }
        }
        @keyframes expandBox {
          from {
            height: 200px;
            background-color: ${theme.colors.black};
          }
          to {
            height: 350px;
            background-color: ${theme.colors.white};
          }
        }
        @keyframes collapseText {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes expandText {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default BrandHeader;
