import React, { useContext } from 'react';

import { FirebaseContext } from '../utilities/context/firebase';

const Error = ({ error, clearFunction }) => {
  const { setFirebaseError } = useContext(FirebaseContext);
  return (
    <>
      <div className='error'>
        <div className='top'>
          <div className='left'></div>
          <h4>Oops!</h4>
          <button
            onClick={() => {
              setFirebaseError('');
              if (clearFunction) {
                clearFunction('');
              }
            }}>
            <img src='/icons/close.svg' alt='close' />
          </button>
        </div>
        <p>{error}</p>
      </div>
      <style jsx>{`
        .error {
          width: 80%;
          border: 1px solid tomato;
          color: tomato;
          font-family: ${(props) => props.theme.fonts.main};
          margin: 20px auto;
          padding: 10px;
        }
        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          text-align: center;
        }
        .top button {
          border: none;
          background: transparent;
        }
        .top button img {
          height: 12px;
          color: tomato;
        }
        h4 {
          margin: 0;
        }
        .top div,
        .top button {
          width: 30px;
        }
        p {
          text-align: center;
          margin: 0;
          font-weight: 300;
          padding-top: 10px;
        }
      `}</style>
    </>
  );
};

export default Error;
