// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
// import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.scss';

const CartDropdown = () => {

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
