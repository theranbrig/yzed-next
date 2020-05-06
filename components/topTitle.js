import BackButton from './backButton';
import React from 'react';

const TopTitle = ({ title, children }) => {
  return (
    <>
      <div className='top-title'>
        <BackButton />
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
      <style jsx>
        {`
          .top-title {
            width: 500px;
            max-width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          button,
          div {
            align-self: center;
            width: 40px;
          }
          h1 {
            font-family: ${(props) => props.theme.fonts.main};
            color: ${(props) => props.theme.colors.black};
            font-size: 1.4rem;
          }
        `}
      </style>
    </>
  );
};

export default TopTitle;
