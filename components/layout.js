import { FirebaseContext } from '../utilities/context/firebase';
function Layout({ children }) {
  const { userData } = React.useContext(FirebaseContext);
  console.log('Nav', userData);
  return (
    <div>
      <h1>YZED Next - {userData.loggedIn ? 'TRUE' : 'FALSE'}</h1>
      {children}
    </div>
  );
}

export default Layout;
