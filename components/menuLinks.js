import React, { useContext, useState } from 'react';

import { FirebaseContext } from '../utilities/context/firebase';
import Link from 'next/link';
import { ModalContext } from '../utilities/context/modal';

// export const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   background: ${(props) => props.theme.colors.white};
//   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
//   min-width: ${({ open }) => (open ? '350px' : '0')};
//   height: 100vh;
//   text-align: left;
//   position: ${({ open }) => (open ? 'fixed' : 'fixed')};
//   margin-top: 10vh;
//   top: 0;
//   left: 0;
//   z-index: 1001;
//   transition: transform 0.3s ease-in-out;
//   font-family: ${(props) => props.theme.fonts.main};
//   overflow-y: scroll;
//   @media (max-width: 576px) {
//     width: 100%;
//     padding: 0;
//     min-width: 0;
//   }
//   a,
//   i {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 0.6rem 1.5rem;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: white;
//     /* -webkit-text-stroke-width: 3px;
//     -webkit-text-stroke-color: ${(props) => props.theme.colors.black};
//     -webkit-text-stroke: 1px ${(props) => props.theme.colors.black}; */
//     text-shadow:
//     -1px -1px 0 ${(props) => props.theme.colors.black},
//      0   -1px 0 ${(props) => props.theme.colors.black},
//      1px -1px 0 ${(props) => props.theme.colors.black},
//      1px  0   0 ${(props) => props.theme.colors.black},
//      1px  1px 0 ${(props) => props.theme.colors.black},
//      0    1px 0 ${(props) => props.theme.colors.black},
//     -1px  1px 0 ${(props) => props.theme.colors.black},
//     -1px  0   0 ${(props) => props.theme.colors.black};
//     text-decoration: none;
//     transition: color 0.3s linear;
//     color: ${(props) => props.theme.colors.white};
//     font-family: ${(props) => props.theme.fonts.main};
//     &:hover {
//       color: ${(props) => props.theme.colors.black};
//     }
//     span {
//       font-size: 0.8rem;
//       color: ${(props) => props.theme.colors.black};
//       font-weight: 300;
//       text-shadow: none;
//       -webkit-text-stroke-width: 0px;
//     }
//   }
//   a.active-link {
//     color: ${(props) => props.theme.colors.black};
//   }
//   .side-links {
//     top: 10vh;
//     position: relative;
//     background: ${(props) => props.theme.colors.white};
//     a {
//       display: block;
//     }
//   }

//   .top-links {
//     background: ${(props) => props.theme.colors.black};
//     position: absolute;
//     width: 100%;
//     height: 5rem;
//     line-height: 2rem;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     button {
//       align-self: center;
//       padding: 0 0 5px 0;
//       letter-spacing: 0;
//       font-size: 1.5rem;
//       background: none;
//       border: none;
//       font-weight: 600;
//       font-family: ${(props) => props.theme.fonts.main};
//       color: ${(props) => props.theme.colors.white};
//       &:hover {
//         color: ${(props) => props.theme.colors.grey};
//       }
//     }
//     button.top-link-active {
//       border-bottom: 2px solid ${(props) => props.theme.colors.white} !important;
//     }

//   }
//   .main-links {
//     height: 45vh;
//     padding-top: 20px;
//   }
//   .bottom-links {
//       border-top: 1px solid ${(props) => props.theme.colors.grey};
//       width: 90%;
//       margin: 0 auto;
//     a {
//       text-align: left;
//       font-size: 1.3rem;
//       font-weight: 300;
//       text-shadow: none;
//       text-transform: none;
//       letter-spacing: 0.05rem;
//       padding-left: 8px;
//       color: ${(props) => props.theme.colors.black};
//     }
//     button {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       font-size: 1.1rem;
//       width: 100%;
//       font-weight: 300;
//       margin-top: 10px;
//       letter-spacing: 0.05rem;
//       padding: 0.5rem 0.5rem 0.5rem 10px;
//       color: ${(props) => props.theme.colors.black};
//       border: none;
//       background: transparent;
//       svg {
//         height: 1rem;
//       }
//     }
//   }
//   @media (max-width: 350px) {
//     .top-links {
//       margin-top: -10px;
//     }
//   }
//   @media (orientation: landscape) and (max-width: 900px) {
//     min-width: ${({ open }) => (open ? '100vw' : '0')};
//     .side-links {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//     }
//     .top-links {
//       height: 40px;
//       button {
//         font-size: 1rem;
//         padding-bottom: 2px;
//         margin-top: -5px;
//       }
//     }
//     .bottom-links {
//       border: none;
//     }
//     .main-links {
//       padding-top: 10px;
//     }
//   }
// `;

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
                <Link
                  href='/'
                  exact
                  activeClassName='active-link'
                  onClick={() => {
                    setModals();
                  }}>
                  <a>Home</a>
                </Link>
                <Link
                  href='/featured'
                  activeClassName='active-link'
                  onClick={() => {
                    setModals();
                  }}>
                  <a>Featured</a>
                </Link>
                <Link
                  href='/feed'
                  activeClassName='active-link'
                  onClick={() => {
                    setModals();
                  }}>
                  <a>Feed</a>
                </Link>
                {userData.loggedIn && (
                  <Link
                    href={`/threads/${userData.id}`}
                    activeClassName='active-link'
                    onClick={() => {
                      setModals();
                    }}>
                    <a>My Threads</a>
                  </Link>
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
                  <Link
                    href='/subscribe'
                    activeClassName='active-link'
                    onClick={() => {
                      setModals();
                    }}>
                    <a>Subscribe</a>
                  </Link>
                )}
              </div>
              <div className='bottom-links'>
                {!userData.loggedIn ? (
                  <Link
                    href='/login'
                    activeClassName='active-link'
                    onClick={() => {
                      setModals();
                    }}>
                    <a>Sign in</a>
                  </Link>
                ) : (
                  <>
                    <Link
                      href='/profile'
                      activeClassName='active-link'
                      onClick={() => {
                        setModals();
                      }}>
                      <a>My profile</a>
                    </Link>
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
            font-family: ${(props) => props.theme.fonts.main};
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
          color: white;
          width: 100%;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: black;
          -webkit-text-stroke: 1px black;
          text-shadow:
          -1px -1px 0 black,
            0   -1px 0 black,
            1px -1px 0 black,
            1px  0   0 black,
            1px  1px 0 black,
            0    1px 0 black,
          -1px  1px 0 black,
          -1px  0   0 black;
          text-decoration: none;
          transition: color 0.3s linear;
          color: white;
          font-family: ${(props) => props.theme.fonts.main};
        }
        a:hover,
        i:hover {
          color:black;
        }
        span {
          font-size: 0.8rem;
          color:black;
          font-weight: 300;
          text-shadow: none;
          -webkit-text-stroke-width: 0px;
        }

{/*}   a.active-link {
//     color: ${(props) => props.theme.colors.black};
//   }*/}
        .side-links {
          top: 10vh;
          position: relative;
          background: ${(props) => props.theme.colors.white};
        }
        .side-links a {
          display: block;
        }


   .top-links {
     background: ${(props) => props.theme.colors.black};
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
        font-family: ${(props) => props.theme.fonts.main};
        color: ${(props) => props.theme.colors.white};
     ``}
      .top-links button:hover {
         color: ${(props) => props.theme.colors.grey};
       }
     .top-links button.top-link-active {
       border-bottom: 2px solid ${(props) => props.theme.colors.white} !important;
     }

//   }
//   .main-links {
//     height: 45vh;
//     padding-top: 20px;
//   }
//   .bottom-links {
//       border-top: 1px solid ${(props) => props.theme.colors.grey};
//       width: 90%;
//       margin: 0 auto;
//     a {
//       text-align: left;
//       font-size: 1.3rem;
//       font-weight: 300;
//       text-shadow: none;
//       text-transform: none;
//       letter-spacing: 0.05rem;
//       padding-left: 8px;
//       color: ${(props) => props.theme.colors.black};
//     }
//     button {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       font-size: 1.1rem;
//       width: 100%;
//       font-weight: 300;
//       margin-top: 10px;
//       letter-spacing: 0.05rem;
//       padding: 0.5rem 0.5rem 0.5rem 10px;
//       color: ${(props) => props.theme.colors.black};
//       border: none;
//       background: transparent;
//       svg {
//         height: 1rem;
//       }
//     }
//   }
//   @media (max-width: 350px) {
//     .top-links {
//       margin-top: -10px;
//     }
//   }
//   @media (orientation: landscape) and (max-width: 900px) {
//     min-width: ${({ open }) => (open ? '100vw' : '0')};
//     .side-links {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//     }
//     .top-links {
//       height: 40px;
//       button {
//         font-size: 1rem;
//         padding-bottom: 2px;
//         margin-top: -5px;
//       }
//     }
//     .bottom-links {
//       border: none;
//     }
//     .main-links {
//       padding-top: 10px;
//     }
//   } */}
                  `}
      </style>
    </>
  );
};

export default MenuLinks;
