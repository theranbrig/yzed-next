import React, { useContext, useEffect, useState } from 'react';
import { useRouter, withRouter } from 'next/router';

import Error from '../components/Error';
import { FirebaseContext } from '../utilities/context/firebase';
import Head from 'next/head';
// import LoadingSpinner from '../components/LoadingSpinner';
// import VerificationSent from './VerificationSent';
import Layout from '../components/layout';
import Link from 'next/link';
import TopTitle from '../components/topTitle';
import theme from '../utilities/theme';

const VerificationConfirmed = (props) => {
  const router = useRouter();
  console.log(router);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [resent, setReset] = useState(false);
  const [unverifiedUser, setUnverifiedUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [sendLoading, setSendLoading] = useState(false);
  const [sendClicked, setSendClicked] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [alreadyVerified, setAlreadyVerified] = useState(false);

  const { firebase, userData, onAuthStateChange, setUserData } = useContext(FirebaseContext);

  const oobCode = router.pathname.slice(
    router.pathname.indexOf('oobCode=') + 8,
    router.pathname.indexOf('apiKey=') - 1
  );

  const verify = async () => {
    setLoading(true);
    await firebase
      .auth()
      .applyActionCode(oobCode)
      .then(function (resp) {
        onAuthStateChange(setUserData);
        const user = firebase.auth().currentUser;
        console.log(user);
        setConfirmed(true);
        setLoading(false);
      })
      .catch(function (error) {
        setError('Oops. This token is either not valid or has been used.');
        setLoading(false);
      });
  };

  const resendEmailVerification = (e) => {
    setSendLoading(true);
    e.preventDefault();
    const user = firebase.auth().currentUser;
    console.log(user);
    user.sendEmailVerification();
    setSendClicked(true);
    setSendLoading(false);
  };

  const loginAndSendEmailVerification = (e) => {
    setSendLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSendClicked(true);
        setSendLoading(false);
        window.reload();
      })
      .catch(function (error) {
        setLoginError(error.message);
        setSendLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (userData.loggedIn) {
      setAlreadyVerified(true);
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      const verifyUser = async () => {
        await verify();
        const user = await firebase.auth().currentUser;
        setCurrentUser(user);
      };
      verifyUser();
      setLoading(false);
    }
  }, [currentUser, userData]);

  if (alreadyVerified)
    return (
      <VerificationStyles>
        <h1>Email address is verified. Redirecting back to YZED.</h1>
        <LoadingSpinner color='#272727' />
      </VerificationStyles>
    );

  if (loading)
    return (
      <VerificationStyles>
        <h1>Confirming Email Address</h1>
        <LoadingSpinner color='#272727' />
      </VerificationStyles>
    );

  return (
    <>
      <Layout>
        <div className='page-container'>
          <Head>YZED - EMAIL VERIFICATION</Head>
          <TopTitle title='Email Verification' />
          {!oobCode.length && !userData.loggedIn ? (
            <>
              <p>
                Please enter your login information to send the validation email again. Shortly, a
                link will arrive in your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  loginAndSendEmailVerification(e);
                }}>
                <input
                  type='text'
                  name='email'
                  placeholder='Enter Email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' disabled={sendLoading || (!password.length && !email.length)}>
                  SEND
                </button>
              </form>
              {loginError && <Error error={loginError} clearFunction={setLoginError} />}
              {sendLoading && <LoadingSpinner color='#272727' />}
            </>
          ) : (
            <>
              {error && !confirmed && !sendClicked && (
                <div>
                  <h1>{error}</h1>
                  {currentUser ? (
                    <>
                      <p>
                        You have already signed up for an account, but have not verified your email
                        address yet. Please click below to resend the the verification email.
                      </p>
                      <form
                        onSubmit={(e) => {
                          resendEmailVerification(e);
                        }}>
                        <button type='submit' disabled={sendLoading || sendClicked}>
                          SEND
                        </button>
                        {sendLoading && <LoadingSpinner color='#272727' />}
                      </form>
                    </>
                  ) : (
                    <>
                      <p>
                        Please enter your login information to send the validation email again.
                        Shortly, a link will arrive in your inbox.
                      </p>
                      <form
                        onSubmit={(e) => {
                          loginAndSendEmailVerification(e);
                        }}>
                        <input
                          type='text'
                          name='email'
                          placeholder='Enter Email'
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type='password'
                          name='password'
                          placeholder='Enter Password'
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type='submit'
                          disabled={sendLoading || (!password.length && !email.length)}>
                          SEND
                        </button>
                      </form>
                      {loginError && <Error error={loginError} clearFunction={setLoginError} />}
                      {sendLoading && <LoadingSpinner color='#272727' />}
                    </>
                  )}
                </div>
              )}
              {confirmed && (
                <div className='confirm'>
                  <h1>Email Address Confirmed!</h1>
                  <CheckSVG />
                  <p>
                    Thank you! You may now go and login with YZED. You may need to login again.
                    Click below to go to the login page. If you are already logged in you will be
                    taken directly to YZED.
                  </p>
                  <button onClick={() => window.reload()}>LOGIN</button>
                </div>
              )}
              {sendClicked && (
                <>
                  <h1>Your request is on it's way.</h1>
                  <p>Thanks for request. Check your inbox for a validation email.</p>
                </>
              )}
            </>
          )}
        </div>
      </Layout>
      <style jsx>{`
        .page-container {
          width: 500px;
          max-width: 95%;
          margin: 0 auto;
          min-height: 90vh;
          font-family: ${theme.fonts.main};
          color: ${theme.colors.black};
        }
        h1 {
          text-align: center;
          margin: 20px auto;
          color: ${theme.colors.black};
        }
        p {
          text-align: center;
          font-weight: 300;
          font-size: 1.3rem;
        }
        p a {
          color: ${theme.colors.black};
          font-weight: 600;
        }
        input {
          width: 90%;
          margin: 10px auto;
          display: block;
          height: 45px;
          font-size: 1.3rem;
          font-family: ${theme.fonts.main};
          border-radius: 25px;
          -webkit-appearance: none;
          border: 1px solid ${theme.colors.black};
          padding: 0 10px;
        }
        button {
          display: block;
          margin: 10px auto;
          border-radius: 25px;
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          font-size: 1.3rem;
          width: 200px;
          height: 45px;
        }
        button:disabled {
          color: ${theme.colors.grey};
        }
        .confirm img {
          height: 100px;
          display: block;
          margin: 0 auto;
        }
        .confirm a {
          display: block;
          margin: 0 auto;
          width: 200px;
          text-align: center;
          height: 45px;
          line-height: 45px;
          font-size: 1.3rem;
          text-decoration: none;
          color: ${theme.colors.black};
          background: ${theme.colors.white};
          border: 2px solid ${theme.colors.black};
          border-radius: 45px;
        }
      `}</style>
    </>
  );
};

export default VerificationConfirmed;
