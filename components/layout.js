import Burger from './burger';
import { FirebaseContext } from '../utilities/context/firebase';
import Link from 'next/link';
import YzedLogo from './yzed_logo';

function Layout({ children }) {
  const { userData } = React.useContext(FirebaseContext);

  return (
    <>
      <div className='layout-container'>
        <div className='top-nav-bar'>
          <Burger />
          <Link href='/'>
            <a>
              <img src='icons/logo.svg' />
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
        }
        img {
          height: 5vh;
          margin-top: 2.5vh;
        }
      `}</style>
    </>
  );
}

export default Layout;
