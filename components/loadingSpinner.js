import React from 'react';
import theme from '../utilities/theme';

const LoadingSpinner = ({ color }) => {
  return (
    <>
      <div className='spinner-container' color={color}>
        <div className='lds-facebook'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src='/icons/logo.svg' alt='YZED logo' />
      </div>
      <style jsx>
        {`
          .spinner-container {
            margin: 0 auto;
            text-align: center;
          }
          .lds-facebook {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-facebook div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: ${theme.colors.black};
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
          }
          .lds-facebook div:nth-child(1) {
            left: 8px;
            animation-delay: -0.24s;
          }
          .lds-facebook div:nth-child(2) {
            left: 32px;
            animation-delay: -0.12s;
          }
          .lds-facebook div:nth-child(3) {
            left: 56px;
            animation-delay: 0;
          }
          h1 {
            color: ${theme.colors.black};
            font-family: ${theme.fonts.main};
            font-weight: 300;
          }
          img {
            width: 40%;
            display: block;
            margin: 0 auto;
          }
          @keyframes lds-facebook {
            0% {
              top: 8px;
              height: 64px;
            }
            50%,
            100% {
              top: 24px;
              height: 32px;
            }
          }
        `}
      </style>
    </>
  );
};

export default LoadingSpinner;
