import { useContext } from 'react';

import { CgShoppingCart } from 'react-icons/cg';
import CartItemContext from '../../context/CartItemContext';
import {
  CartItemsNum,
  CartLink,
  Navbar,
  NavLink,
  NavLinkBrand,
  NavLinks,
  VoidShop,
} from './NavSC';

export default function Nav() {
  const { cartItemsObj } = useContext(CartItemContext);
  const cartItemsStLength = Object.keys(cartItemsObj).length;
  return (
    <Navbar>
      <VoidShop>
        <NavLinkBrand to={'/'}>Void Shop </NavLinkBrand>
      </VoidShop>
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
