import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgShoppingCart } from 'react-icons/cg';
const Navbar = styled.nav`
  min-height: 10vh;
  padding: 0 4rem;
  display: flex;
  gap: 4rem;
  background-color: #131315;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 20px #f02d65;
  position: sticky;
  top: 0;
`;
const VoidShop = styled.h1`
  font-size: 2.5rem;
  text-shadow: 1px 1px 7px #f02d65;
`;
const NavLinks = styled.ul`
  width: 40%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;
const CheckOutBtn = styled.button`
  color: white;
  position: absolute;
  transform: translate(1700px, 65px) scale(1);
  transition: 300ms ease;
  display: ${({ cartItemsLength }) =>
    cartItemsLength > 0 ? 'inline' : 'none'};
`;

const NavLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const CartLink = styled(Link)`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  position: relative;
`;
const CartItemsNum = styled.p`
  font-size: 1.5rem;
  position: absolute;
  font-weight: bold;
  bottom: -10px;
  right: -8px;
`;

export default function Nav({ cartItemsArr }) {
  const cartItemsLength = cartItemsArr.length;
  return (
    <Navbar>
      <CheckOutBtn cartItemsLength={cartItemsLength}>Check out</CheckOutBtn>
      <VoidShop>Void Shop</VoidShop>
      <NavLinks>
        <NavLink to={'home'}>Home </NavLink>
        <NavLink to={'shop'}>Shop </NavLink>
        <CartLink to={'cart'}>
          <CartItemsNum>
            {cartItemsLength === 0 ? '' : cartItemsLength}
          </CartItemsNum>
          <CgShoppingCart></CgShoppingCart>
        </CartLink>
      </NavLinks>
    </Navbar>
  );
}
