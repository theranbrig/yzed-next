import { FirebaseContext } from '../utilities/context/firebase';
import Link from 'next/link';
import YzedLogo from './yzed_logo';

function Layout({ children }) {
  const { userData } = React.useContext(FirebaseContext);
  console.log('Nav', userData);
  return (
    <>
      <div className='layout-container'>
        <div className='top-nav-bar'>
          <Link href='/'>
            <YzedLogo />
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
      `}</style>
      <style jsx global>{`
        svg {
          height: 6vh;
          margin-top: 2vh;
        }
      `}</style>
    </>
  );
}

export default Layout;
