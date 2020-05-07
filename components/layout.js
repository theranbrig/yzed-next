import Burger from './burger';
import { FirebaseContext } from '../utilities/context/firebase';
import Link from 'next/link';
import MenuLinks from './menuLinks';
import YzedLogo from './yzed_logo';
import theme from '../utilities/theme';

function Layout({ children }) {
  const { userData } = React.useContext(FirebaseContext);

  return (
    <>
      <div className='layout-container'>
        <div className='top-nav-bar'>
          <Burger />
          <MenuLinks />
          <Link href='/'>
            <a>
              <img className='title-logo' src='icons/logo.svg' alt='YZED word mark' />
            </a>
          </Link>
        </div>
        <section className='main-content'>{children}</section>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>{`
        .top-nav-bar {
          width: 100%;
          height: 10vh;

          background: ${theme.colors.white};
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 10000;
        }
        img.title-logo {
          height: 2rem;
        }
        .main-content {
          padding-top: 10vh;
          min-height: 90vh;
        }
      `}</style>
    </>
  );
}

export default Layout;
