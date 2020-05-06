import React, { useContext, useEffect, useState } from 'react';

import Div100vh from 'react-div-100vh';
import Error from '../components/Error';
import { FirebaseContext } from '../utilities/context/firebase';
import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import TopTitle from '../components/topTitle';
import { motion } from 'framer-motion';
import theme from '../utilities/theme';
import { useRouter } from 'next/router';

const Register = () => {
  const [loading, setLoading] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const { registerUser, firebaseError, userData } = useContext(FirebaseContext);

  useEffect(() => {
    setLoading(true);
    if (userData.loggedIn) {
      router.push('/profile');
    }
    setLoading(false);
  }, [userData]);

  const checkForm = () => {
    const check = /^\S+$/.test(userName);
    if (!check) {
      setError('No spaces allowed in usernames');
    }
    return check;
  };

  const checkPassword = (value) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
    const check = strongRegex.test(value);
    if (check) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    return check;
  };

  return (
    <>
      <Head>
        <title>YZED - REGISTER</title>
      </Head>
      <Layout>
        <motion.div
          exit={{ opacity: 0, x: '100vw' }}
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='page-container'>
            {success ? (
              <div className='success'>
                <h1>Registration Complete</h1>
                <img src='/icons/check.svg' alt='success check' />
                <p>
                  An message to verify your email has been sent to your inbox. Please click the
                  verification email to finalize your registration
                </p>
              </div>
            ) : (
              <>
                <TopTitle title='Register Today' />
                <form
                  className='register-form'
                  onSubmit={async (e) => {
                    setLoading(true);
                    e.preventDefault();
                    if (checkForm() && passwordValid) {
                      await registerUser(email, password, userName, setSuccess);
                    }
                    setLoading(false);
                  }}>
                  <div className='form-input'>
                    <input
                      placeholder='Username'
                      name='userName'
                      type='text'
                      value={userName}
                      required
                      minLength='5'
                      maxLength='18'
                      aria-label='username'
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className='form-input'>
                    <input
                      placeholder='Email Address'
                      name='email'
                      type='email'
                      value={email}
                      required
                      aria-label='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={passwordValid ? 'form-input valid' : 'form-input invalid'}>
                    <input
                      placeholder='Password'
                      name='password'
                      type='password'
                      required
                      minLength='8'
                      maxLength='32'
                      aria-label='password'
                      onChange={(e) => {
                        checkPassword(e.target.value);
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    className={
                      password === confirmPassword ? 'form-input valid' : 'form-input invalid'
                    }>
                    <input
                      placeholder='Confirm Password'
                      name='Confirm Password'
                      type='password'
                      required
                      minLength='8'
                      maxLength='32'
                      aria-label='confirm password'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className='password-info'>
                      <p>
                        Password must be between 8 and 32 characters, and contain at least one
                        number and one special character.
                      </p>
                    </div>
                  </div>
                  <button
                    className='submit-button'
                    disabled={password !== confirmPassword || !passwordValid || loading}
                    type='submit'>
                    {loading ? 'BECOMING A YZER' : 'BECOME A YZER'}
                  </button>
                </form>
                {(firebaseError || error) && (
                  <div className='error'>
                    <Error error={firebaseError || error} clearFunction={setError} />
                  </div>
                )}
                {/* {loading && <LoadingSpinner color='black' />} */}
                <div className='forgot'>
                  <Link href='/login'>
                    <a>Already a member?</a>
                  </Link>
                </div>
                <div className='bottom'>
                  <p>
                    If you join our platform and become a YZER you accept our terms of use and
                    privacy policy.
                  </p>
                </div>
              </>
            )}
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
    </>
  );
};

export default Register;
