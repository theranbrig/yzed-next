import Burger from './burger';
import { FirebaseContext } from '../utilities/context/firebase';
import Link from 'next/link';
import MenuLinks from './menuLinks';
import YzedLogo from './yzed_logo';

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
              <img src='icons/logo.svg' alt='YZED word mark' />
            </a>
          </Link>
        </div>
        {children}
      </div>
      <style jsx>{`
        .top-nav-bar {
          width: 100%;
          height: 10vh;
          border-bottom: 1px solid black;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 2rem;
        }
      `}</style>
    </>
  );
}

export default Layout;
