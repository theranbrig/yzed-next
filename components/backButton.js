import React, { useContext } from 'react';

import { FirebaseContext } from '../utilities/context/firebase';
import { useRouter } from 'next/router';

const BackButton = ({ link }) => {
  const { setFirebaseError } = useContext(FirebaseContext);
  const router = useRouter();
  return (
    <>
      <div className='back-button'>
        <button
          onClick={() => {
            document.body.style.overflow = 'unset';
            if (link) {
              router.push(link);
            } else {
              router.goBack();
            }
            setFirebaseError('');
          }}
          aria-label='Back Button'>
          <img src='./icons/chevron-left.svg' alt='chevron left' />
        </button>
      </div>
      <style jsx>{`
        .back-button {
          text-align: left;
          align-self: center;
          background: transparent;
        }
        button {
          border: none;
          background: transparent;
          height: 16px;
          width: 16px;
        }
        img {
          height: 14px;
        }
      `}</style>
    </>
  );
};

export default BackButton;
