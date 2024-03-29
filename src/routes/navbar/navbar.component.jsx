import { Fragment, useContext } from 'react';
import  { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as LeatherMore } from '../../assets/logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navbar.styles.scss'

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <div className="navbar">
        <Link className='logo-container' to='/'>
            <LeatherMore className='logo'/>
        </Link>
        
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
               SHOP
            </Link>
            
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
              </span>
            ) : (
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
            )}
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default NavBar;