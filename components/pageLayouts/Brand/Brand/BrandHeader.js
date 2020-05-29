import React, { useContext, useEffect, useState } from 'react';

import Navigation from '../../../reusableStyledComponents/Navigation';
import theme from '../../../../utilities/theme';

const BrandHeader = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
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
            className='filled-svg'>
            <g>
              <path
                className='st0'
                d='M81,44.9l41.8-29.8H88.4L92.2,0h67.7l-3.2,15.1l-41.2,29.8h37.1L148.6,60H78L81,44.9z'
              />
              <path
                className='st0'
                d='M87.1,0H58.8L39.5,28.9L32.6,0H4.4L17,44.9H4L0.4,60l21.3,0c22.6,0,36.1-19,36.1-19L87.1,0z'
              />
              <path
                className='st0'
                d='M243.7,0h46.2c20.4,0,29.3,7.9,24.9,30c-4.4,21.1-16.9,30-36.8,30h-46.7L243.7,0z M258.1,44.9h13.6
		c10.8,0,16.3-5.4,18.3-14.9c1.9-9.5-1.3-14.9-12.1-14.9h-13.6L258.1,44.9z'
              />
              <path
                className='st0'
                d='M170.5,0h63.8l-3,14.6h-40.1l-1.7,8.1h37.2l-3,14.6h-37.2l-1.7,8.1h40.1l-3,14.6h-63.8L170.5,0z'
              />
              <circle className='st0' cx='342.8' cy='47.9' r='12.1' />
            </g>
          </svg>

          <svg
            version='1.1'
            id='Laag_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 335 60'
            className='outline-svg'>
            <g>
              <path
                class='st0'
                d='M140.4,58.6H73.2l2.9-14.8l0.1-0.1l38.5-27.5H83l3.8-14.9h64.5l-3.1,14.8l-0.1,0.1l-38,27.5h34.3L140.4,58.6z
		 M74,57.9h65.9l3.6-13.5h-35.6l39.6-28.7l2.9-13.7H87.3l-3.4,13.5h33.1L76.8,44.3L74,57.9z'
              />
              <path
                class='st0'
                d='M20.5,58.6H0l3.6-14.9h12.1L3.8,1.4h27.3l6.4,26.7L55.3,1.4h27.6l-28,39.2C54.7,40.8,41.8,58.6,20.5,58.6z
		 M0.9,57.9h19.6c20.9,0,33.6-17.6,33.7-17.8L81.5,2.1H55.7L37.2,29.8L30.5,2.1H4.7l11.9,42.3H4.1L0.9,57.9z'
              />
              <path
                class='st0'
                d='M262.2,58.6h-44.5l0.1-0.4l11.7-56.8h43.8c10.4,0,17.3,2.3,21.1,6.9c3.8,4.6,4.7,11.8,2.7,21.8
		C293.2,49.3,281.7,58.6,262.2,58.6z M218.6,57.9h43.6c19.4,0,30.4-8.9,34.3-28c2-9.8,1.1-16.8-2.5-21.2c-3.7-4.5-10.4-6.6-20.6-6.6
		h-43.3L218.6,57.9z M256.2,44.4H243l6-28.8h13.1c5,0,8.3,1.2,10.3,3.6c2,2.4,2.5,6,1.5,10.9C271.8,39.7,266,44.4,256.2,44.4z
		 M243.8,43.7h12.4c9.4,0,15-4.5,16.9-13.8c0.9-4.7,0.5-8.1-1.3-10.3c-1.8-2.2-5-3.3-9.7-3.3h-12.5L243.8,43.7z'
              />
              <path
                class='st0'
                d='M209.6,58.6h-60.9l11.8-57.3h60.9l-3,14.5h-37.8l-1.5,6.9h35.1l-3,14.5h-35.1l-1.5,6.9h37.8L209.6,58.6z
		 M149.6,57.9H209l2.7-13.1h-37.8l1.8-8.3h35.1l2.7-13.1h-35.1l1.8-8.3h37.8l2.7-13.1h-59.4L149.6,57.9z'
              />
              <path
                class='st0'
                d='M323.2,58.6c-6.5,0-11.8-5.3-11.8-11.8s5.3-11.8,11.8-11.8c6.5,0,11.8,5.3,11.8,11.8S329.7,58.6,323.2,58.6z
		 M323.2,35.8c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.1,0,11.1-5,11.1-11.1S329.3,35.8,323.2,35.8z'
              />
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
          margin: 0 auto;
          padding: 0 10%;
          align-items: center;
          max-width: 100%;
          height: 350px;
          transition: all 0.5s ease;
        }
        .collapsed {
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          transition: all 0.5s ease;
          height: 200px;
        }
        .collapsed .message {
          transition: all 1s ease;
          color: ${theme.colors.black};
          opacity: 0;
          height: 0px;
        }
        .message {
          opacity: 1;
          color: ${theme.colors.black};
          transition: all 1s ease;
          height: 130px;
        }
        .spacer {
          height: 69px;
          transition: all 1s ease;
        }
        .collapsed .spacer {
          height: 0px;
          transition: all 1s ease;
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
        .expanded .filled-svg,
        .expanded .outline-svg {
          height: 60px;
          transition: all 1s ease;
        }
        .collapsed .filled-svg,
        .collapsed .outline-svg {
          height: 40px;
          fill: ${theme.colors.white};
          transition: all 1s ease;
        }
        .filled-svg {
          z-index: 100;
        }
        .filled-logo {
          fill: ${theme.colors.black};
        }
        .outline-svg {
          margin: -15px 0 0 60px;
          z-index: 1;
        }
        /* Medium (md) */
        @media (max-width: 768px) {
          .message h2 {
            font-size: 1.1rem;
          }
          .message p {
            font-size: 0.8rem;
          }
          .logo svg {
            height: 40px !important;
          }
          .expanded .outline-svg,
          .expanded .filled-svg {
            height: 40px;
          }
        }
        @media screen and (orientation: landscape) and (min-device-width: 375px) and (max-device-width: 900px) {
          /* Your CSS Here*/
          .header-container {
            width: 100%;
            padding: 5%;
          }
          .logo svg {
            height: 30px !important;
          }
        }
        /* Small (sm) */
        @media (max-width: 640px) {
          .header-container,
          .header-container.collapsed,
          .header-container.expanded {
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            animation: none;
            padding: 0;
            margin: 0;
          }

          .logo svg {
            fill: white;
            height: 40px;
          }
          .logo {
            background-color: ${theme.colors.black};
            width: 100%;
            padding: 30px 20px 0px;
          }
          .right-content {
            display: none;
          }
          .filled-svg {
            margin: 0;
          }
          .outline-svg {
            margin: -10px 0 0 40px;
          }
          .collapsed,
          .expanded {
            animation: none;
          }
        }
      `}</style>
      <style jsx global>
        {`
          @media screen and (orientation: landscape) and (min-device-width: 375px) and (max-device-width: 900px) {
            .expanded .navigation-container {
              margin-top: 50px;
              animation: all 1s;
            }
            .collapsed .navigation-container {
              animation: all 1s;
              margin-top: 30px;
            }
        `}
      </style>
    </>
  );
};

export default BrandHeader;
