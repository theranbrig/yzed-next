import React, { useContext, useEffect, useState } from 'react';

import Div100vh from 'react-div-100vh';
import Error from '../components/error';
import { FirebaseContext } from '../utilities/context/firebase';
import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import TopTitle from '../components/topTitle';
import { motion } from 'framer-motion';
import theme from '../utilities/theme';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { loginUser, firebaseError, userData } = useContext(FirebaseContext);

  useEffect(() => {
    if (userData.loggedIn) {
      router.push('/');
    }
  }, [userData]);

  return (
    <>
      <Layout>
        <Head>
          <title>YZED - LOGIN</title>
        </Head>
        <motion.div
          exit={{ opacity: 0, x: '-100vw' }}
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='page-container'>
            <section className='top'>
              <TopTitle title='Log In' />
              <form
                className='user-form'
                onSubmit={(e) => {
                  e.preventDefault();
                  loginUser(email, password);
                }}>
                <div className='form-input'>
                  <input
                    aria-label='email'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='Enter Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='form-input'>
                  <input
                    aria-label='password'
                    name='password'
                    type='password'
                    placeholder='Enter Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className='submit-button'
                  type='submit'
                  disabled={!password.length || !email.length}>
                  SIGN IN
                </button>
              </form>
              <div className='forgot'>
                <Link href='/request_reset'>
                  <a>I forgot my password.</a>
                </Link>
              </div>
              <div className='forgot'>
                <p>
                  <Link href='/verified'>
                    <a>Can't log in? Send email validation request again.</a>
                  </Link>
                </p>
              </div>
              {firebaseError && (
                <div className='error'>
                  <Error error={firebaseError} />
                </div>
              )}
            </section>
            <div className='bottom'>
              <div className='bottom-content'>
                <p>Want to become a YZER?</p>
                <Link href='/register'>
                  <a>Sign Up Now</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
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
            min-height: 90vh;
            margin: 0 auto;
            background: ${theme.colors.white};
            font-family: ${theme.fonts.main};
          }
          form {
            width: 90%;
            margin: 0 auto;
          }
          input {
            font-family: ${theme.fonts.main};
            display: block;
            width: calc(90%);
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
          .bottom a {
            text-decoration: none;
            border-bottom: 1px solid ${theme.colors.grey};
            margin: 0 auto;
            text-align: center;
            padding: 0 0 5px 0;
            color: ${theme.colors.grey};
          }
          .bottom p {
            text-align: center;
            font-weight: 300;
            max-width: 90%;
            margin: 0 auto;
            padding-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};

export default Login;
