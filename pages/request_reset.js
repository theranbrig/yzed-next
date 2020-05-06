import React, { useContext, useEffect, useState } from 'react';

import Div100vh from 'react-div-100vh';
import Error from '../components/Error';
import { FirebaseContext } from '../utilities/context/firebase';
import Head from 'next/head';
import Layout from '../components/layout';
import TopTitle from '../components/TopTitle';
import { motion } from 'framer-motion';
import theme from '../utilities/theme';
import { useRouter } from 'next/router';

const Reset = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const { firebaseError, userData, forgotEmail } = useContext(FirebaseContext);

  useEffect(() => {
    if (userData.loggedIn) {
      router.push('/');
    }
  }, [userData]);

  return (
    <Layout>
      <motion.div
        exit={{ opacity: 0, x: '100vw' }}
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
        <Div100vh>
          <div className='page-container'>
            <Head>
              <title>YZED - FORGOT PASSWORD</title>
            </Head>
            {submitted ? (
              <div className='success'>
                <TopTitle title='Forgot Password' />
                <div className='check'>
                  <p>
                    If any account is connected to the email address {email}, then there will be an
                    email with a magic link in your inbox within 24 hours.
                  </p>
                  <img src='/icons/check.svg' alt='success check' />
                </div>
              </div>
            ) : (
              <>
                <TopTitle title='Forgot Password' />
                <div className='forgot'>
                  <p>
                    Forgot your password? Don’t worry, we’ve got you! Enter your email address and
                    we will send you a magic link.
                  </p>
                </div>
                <form
                  className='user-form'
                  onSubmit={(e) => {
                    e.preventDefault();
                    forgotEmail(email, setSubmitted);
                  }}>
                  <div className='form-input'>
                    <input
                      aria-label='email'
                      placeholder='Email Address'
                      name='email'
                      type='email'
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button className='submit-button' disabled={!email.length} type='submit'>
                    SEND LINK
                  </button>
                </form>
                {(firebaseError || error) && (
                  <div className='error'>
                    <Error error={firebaseError || error} clickFunction={setError} />
                  </div>
                )}
              </>
            )}
          </div>
        </Div100vh>
      </motion.div>
      <style jsx>
        {`
          .submit-button {
            font-family: ${theme.fonts.main};
            font-weight: 500;
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            width: 90%;
            margin: 0 auto;
            display: block;
            height: 45px;
            border-radius: 25px;
            font-weight: 700;
            letter-spacing: 0.1rem;
            font-size: 1.1rem;
          }
          .submit-button:disabled {
            color: ${theme.colors.grey};
          }
          .page-container {
            width: 500px;
            max-width: 95%;
            margin: 0 auto;
            background: ${theme.colors.white};
            font-family: ${theme.fonts.main};
            min-height: 90vh;
          }
          form {
            width: 90%;
            margin: 0 auto;
          }
          input {
            font-family: ${theme.fonts.main};
            display: block;
            width: calc(90% - 20px);
            height: 40px;
            border-radius: 20px;
            box-shadow: none;
            border: 1px solid ${theme.colors.black};
            font-size: 1.1rem;
            margin: 10px auto;
            padding: 0 10px;
            background: ${theme.colors.white};
            -webkit-appearance: none;
          }
          .invalid input {
            color: tomato;
          }
          .valid input {
            color: mediumSeaGreen;
          }
          input::placeholder {
            color: ${theme.colors.grey};
            font-weight: 300;
          }
          .error {
            width: 90%;
            margin: 0 auto;
          }
          .error h3 {
            color: tomato;
            font-family: ${theme.fonts.main};
            font-weight: 300;
            font-size: 0.9rem;
            text-align: center;
          }

          .forgot {
            text-align: center;
            margin-top: 30px;
          }
          .forgot a {
            text-decoration: none;
            border-bottom: 1px solid ${theme.colors.grey};
            margin: 0 auto;
            text-align: center;
            padding: 0 0 5px 0;
            color: ${theme.colors.grey};
          }
          .bottom {
            position: fixed;
            bottom: 0;
            width: 500px;
            max-width: 100%;
            border-top: 1px solid ${theme.colors.lightGrey};
            height: 15vh;
            text-align: center;
            background: ${theme.colors.white};
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;
          }
          .bottom p {
            text-align: center;
            font-weight: 300;
            max-width: 90%;
            margin: 0 auto;
            padding-bottom: 20px;
          }
          .password-info {
            width: 90%;
            margin: 0 auto;
            padding: 0;
            list-style-type: none;
          }
          .password-info p {
            font-family: ${theme.fonts.main};
            color: ${theme.colors.grey};
            font-size: 0.75rem;
            text-align: center;
          }
          .success {
            text-align: center;
          }
          .success img {
            height: 100px;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>
    </Layout>
  );
};

export default Reset;
