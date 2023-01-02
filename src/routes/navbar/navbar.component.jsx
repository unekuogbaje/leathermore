import { Fragment, useContext } from 'react';
import  { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navbar.styles.scss'

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  
    return (
      <Fragment>
        <div className="navbar">
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
        </Link>
        
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                Start shopping
            </Link>
            
            {currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
              </span>
            ) : (
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
            )}
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default NavBar;