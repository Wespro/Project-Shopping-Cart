import React, { useContext } from 'react';

import { CgShoppingCart } from 'react-icons/cg';
import CartItemContext from '../../context/CartItemContext';
import {
  CartItemsNum,
  CartLink,
  CheckOutBtn,
  Navbar,
  NavLink,
  NavLinks,
  VoidShop,
} from './NavSC';

export default function Nav() {
  const [cartItemsSt] = useContext(CartItemContext);
  const cartItemsStLength = Object.keys(cartItemsSt).length;
  return (
    <Navbar>
      <CheckOutBtn>Check out</CheckOutBtn>
      <VoidShop>Void Shop</VoidShop>
      <NavLinks>
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'shop'}>Shop </NavLink>
        <CartLink to={'cart'}>
          <CartItemsNum>
            {cartItemsStLength === 0 ? '' : cartItemsStLength}
          </CartItemsNum>
          <CgShoppingCart></CgShoppingCart>
        </CartLink>
      </NavLinks>
    </Navbar>
  );
}
