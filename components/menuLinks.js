import React, { useContext, useState } from 'react';

import ActiveLink from './activeLink';
import { FirebaseContext } from '../utilities/context/firebase';
import { ModalContext } from '../utilities/context/modal';
import theme from '../utilities/theme';

const MenuLinks = () => {
  const [showHome, setShowHome] = useState(true);
  const { userData, logoutUser } = useContext(FirebaseContext);

  // const history = useHistory();

  const { openMenu, setOpenMenu, setBodyScroll } = useContext(ModalContext);

  const setModals = () => {
    setOpenMenu(false);
    setBodyScroll(false);
  };

  return (
    <>
      <div className={openMenu ? 'menu open' : 'menu closed'}>
        <div className='top-links'>
          <button
            className={showHome ? 'top-link-active' : 'top-link'}
            onClick={() => setShowHome(true)}>
            YZED
          </button>
        </div>
        <section className='side-links'>
          {showHome ? (
            <>
              <div className='main-links'>
                <ActiveLink
                  href='/'
                  exact
                  activeClassName='active-link'
                  onClick={() => {
                    setModals();
                  }}>
                  <a>Home</a>
                </ActiveLink>
                <ActiveLink
                  href='/featured'
                  activeClassName='active-link'
                  onClick={() => {
                    setModals();
                  }}>
                  <a>Featured</a>
                </ActiveLink>
                <ActiveLink
                  href='/feed'
                  activeClassName='active-link'
                  onClick={() => {
                    setModals();
                  }}>
                  <a>Feed</a>
                </ActiveLink>
                {userData.loggedIn && (
                  <ActiveLink
                    href={`/threads/${userData.id}`}
                    activeClassName='active-link'
                    onClick={() => {
                      setModals();
                    }}>
                    <a>My Threads</a>
                  </ActiveLink>
                )}
                {/* <NavLink
                to='/checkout'
                activeClassName='active-link'
                onClick={() => {
                  setModals();
                }}>
                My Bag
              </NavLink> */}
                {!userData.loggedIn && (
                  <ActiveLink
                    href='/subscribe'
                    activeClassName='active-link'
                    onClick={() => {
                      setModals();
                    }}>
                    <a>Subscribe</a>
                  </ActiveLink>
                )}
              </div>
              <div className='bottom-links'>
                {!userData.loggedIn ? (
                  <ActiveLink
                    href='/login'
                    activeClassName='active-link'
                    onClick={() => {
                      setModals();
                    }}>
                    <a>Sign in</a>
                  </ActiveLink>
                ) : (
                  <>
                    <ActiveLink
                      href='/profile'
                      activeClassName='active-link'
                      onClick={() => {
                        setModals();
                      }}>
                      <a>My profile</a>
                    </ActiveLink>
                    <button
                      onClick={() => {
                        logoutUser();
                        history.push('/');
                        setBodyScroll(false);
                      }}>
                      Logout
                      <img src='./icons/chevron-right.svg' alt='chevron right' />
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <NavLink
                to='/shop/new'
                activeClassName='active-link'
                onClick={() => {
                  setModals();
                }}>
                NEW IN
              </NavLink>
              <StoreMenuLinks
                title='women'
                setModals={setModals}
                categories={[
                  'jackets',
                  'dresses',
                  'tops',
                  'knitwear',
                  'trousers',
                  'jeans',
                  'skirts',
                  'shoes',
                  'bags',
                ]}
              />
              <StoreMenuLinks
                setModals={setModals}
                title='men'
                categories={[
                  'jackets',
                  'shirts',
                  'tops',
                  'knitwear',
                  'trousers',
                  'jeans',
                  'shoes',
                  'bags',
                ]}
              />
              <StoreMenuLinks
                setModals={setModals}
                title='unisex'
                categories={['jackets', 'tops', 'knitwear', 'shoes', 'bags']}
              />
              <NavLink
                to='/shop/sale'
                activeClassName='active-link'
                onClick={() => {
                  setModals();
                }}>
                SALE
              </NavLink>
            </>
          )}
        </section>
      </div>
      <style jsx>
        {`
          .menu {
            display: flex;
            flex-direction: column;
            justify-content: start;
            background: white;
            height: 100vh;
            text-align: left;
            position: fixed;
            margin-top: 10vh;
            top: 0;
            left: 0;
            z-index: 1001;
            transition: all 0.3s ease;
            font-family: ${theme.fonts.main};
            overflow-y: scroll;
            transform: translateX(0);
          }
          .menu.open {
            transform: 'translateX(0)';
            max-width: 350px;
            opacity: 1;
          }
          .menu.closed {
            transform: 'translateX(-100%)';
            max-width: 0;
            opacity: 0;
          }
          @media (max-width: 576px) {
            .menu {
              width: 100%;
              padding: 0;
              min-width: 0;
            }
          }
          a,
          i {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 0.6rem 1.5rem;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: ${theme.colors.white};
            width: 100%;
            text-shadow: -1px -1px 0 ${theme.colors.black}, 0 -1px 0 ${theme.colors.black},
              1px -1px 0 ${theme.colors.black}, 1px 0 0 ${theme.colors.black},
              1px 1px 0 ${theme.colors.black}, 0 1px 0 ${theme.colors.black},
              -1px 1px 0 ${theme.colors.black}, -1px 0 0 ${theme.colors.black};
            text-decoration: none;
            transition: color 0.3s linear;
            color: white;
            font-family: ${theme.fonts.main};
            font-weight: 600;
          }
          a:hover,
          i:hover {
            color: ${theme.colors.black};
          }
          span {
            font-size: 0.8rem;
            color: black;
            font-weight: 300;
            text-shadow: none;
            -webkit-text-stroke-width: 0px;
          }
          .active-links a {
            color: black;
          }
          .side-links {
            top: 10vh;
            position: relative;
            background: ${theme.colors.white};
          }
          .side-links a {
            display: block;
          }
          .active-link {
            color: ${theme.colors.black};
          }
          .top-links {
            background: ${theme.colors.black};
            position: absolute;
            width: 100%;
            height: 5rem;
            line-height: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .top-links button {
            align-self: center;
            padding: 0 0 5px 0;
            letter-spacing: 0;
            font-size: 1.5rem;
            background: none;
            border: none;
            font-weight: 600;
            font-family: ${theme.fonts.main};
            color: ${theme.colors.white};
          }
          .top-links button:hover {
            color: ${theme.colors.grey};
          }
          .top-links button.top-link-active {
            border-bottom: 2px solid ${theme.colors.white} !important;
          }
          .main-links {
            height: 45vh;
            padding-top: 20px;
          }
          .bottom-links {
            border-top: 1px solid ${theme.colors.grey};
            width: 90%;
            margin: 0 auto;
          }
          .bottom-links a {
            text-align: left;
            font-size: 1.3rem;
            font-weight: 300;
            text-shadow: none;
            text-transform: none;
            letter-spacing: 0.05rem;
            padding-left: 8px;
            color: ${theme.colors.black};
          }
          .bottom-links button {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 1.1rem;
            width: 100%;
            font-weight: 300;
            margin-top: 10px;
            letter-spacing: 0.05rem;
            padding: 0.5rem 0.5rem 0.5rem 10px;
            color: ${theme.colors.black};
            border: none;
            background: transparent;
          }
          .bottom-links button img {
            height: 1rem;
          }

          @media (max-width: 350px) {
            .top-links {
              margin-top: -10px;
            }
          }
          @media (orientation: landscape) and (max-width: 900px) {
            .menu .open {
              min-width: 100vw;
            }
            .menu .close {
              min-width: 0px;
            }
            .side-links {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .top-links {
              height: 40px;
            }
            .top-links button {
              font-size: 1rem;
              padding-bottom: 2px;
              margin-top: -5px;
            }
            .bottom-links {
              border: none;
            }
            .main-links {
              padding-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default MenuLinks;
