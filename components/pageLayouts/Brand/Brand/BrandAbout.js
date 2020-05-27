import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../../utilities/theme';

const BrandAbout = () => {
  return (
    <>
      <div className='about-container'>
        <div className='mobile-message'>
          <h2>We believe democratic fashion catalyzes self-discovery.</h2>
          <p>
            YZED is the view of four professionals from different backgrounds based in Seoul, South
            Korea represented by innovation hub 101Global.
          </p>
        </div>
        <div className='about'>
          <h2>About Us</h2>
          <p>
            In 2019 we started to develop 3D fashion combined with augmented reality for brands,
            realizing how powerful the idea was we decided to radically change the status quo of the
            fashion industry.
          </p>
          <p>
            We create fully digital clothing pieces and accessories for brands that aim to have
            creative control over their product content, saving costs on photoshoots and campaigns.
          </p>
          <p>The current page you are on is an example of our beta version to be released soon. </p>
          <p>
            That’s all for now,
            <br />
            XOXO from the YZED team.
          </p>
        </div>
        <div className='contact'>
          <h2>Would you like to be a catalyst of democratic fashion?</h2>

          <a
            className='black-link'
            href='mailto:yzed.official@gmail.com?subject=Interested in Learning More'>
            SIGN UP FOR UPDATES
          </a>
          <p className='or'>or</p>
          <a
            className='blank-link'
            href='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/MANIFESTO_PDF.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            DOWNLOAD MANIFESTO
          </a>
        </div>
      </div>
      <style jsx>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-content: center;
          width: 80%;
          margin: 0 auto;
          padding: 100px 0;
        }
        .about h2 {
          font-weight: 500;
        }
        .contact {
          width: 60%;
          margin: 0 auto;
        }
        .contact h2 {
          text-align: center;
          font-weight: 500;
        }
        .contact a {
          text-align: center;
          display: block;
        }
        p {
          font-weight: 100;
        }

        a.black-link {
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 20px;
          width: 80%;
          margin: 0 auto;
          border: 1px solid ${theme.colors.black};
        }
        a {
          letter-spacing: 0.2em;
          font-weight: 500;
        }
        a.black-link:hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
        }
        a.blank-link {
          color: ${theme.colors.black};
          padding: 5px;
          position: relative;
          text-decoration: none;
          width: 100%;
        }
        a.blank-link:after {
          content: '';
          width: 60%;
          border-bottom: 1px solid black;
          position: absolute;
          left: calc(20%);
          bottom: 0;
        }
        .or {
          color: ${theme.colors.mediumGrey};
          font-size: 0.8rem;
          text-align: center;
        }
        @media (max-width: 640px) {
          .about-container {
            width: 90%;
            grid-template-columns: 1fr;
            padding: 30px 0;
          }
          .contact {
            width: 100%;
            padding-bottom: 30px;
          }
          .about {
            padding: 30px 0;
          }
          a.black-link {
            width: 100%;
          }
        }
        @media (min-width: 641px) {
          .mobile-message {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default BrandAbout;
