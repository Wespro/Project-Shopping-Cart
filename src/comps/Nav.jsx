import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgShoppingCart } from 'react-icons/cg';
import { use } from 'react';
import CartItemContext from '../context/CartItemContext';
const Navbar = styled.nav`
  min-height: 10vh;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  background-color: #131315;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 20px #f02d65;
  position: sticky;
  top: 0;
`;
const VoidShop = styled.h1`
  font-size: clamp(1.5rem, 1.5vw, 4rem);
  text-shadow: 1px 1px 7px #f02d65;
`;
const NavLinks = styled.ul`
  width: clamp(10rem, 20%, 30rem);
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-content: center;
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
  font-size: clamp(0.8rem, 1.2vw, 2rem);
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const CartLink = styled(Link)`
  font-size: clamp(1rem, 2.5rem, 3rem);
  display: flex;
  align-items: center;
  position: relative;
`;
const CartItemsNum = styled.p`
  font-size: clamp(0.8rem, 1.5rem, 2rem);
  position: absolute;
  font-weight: bold;
  bottom: -10px;
  right: -8px;
`;

export default function Nav() {
  const cartitemslength = useContext(CartItemContext)[1].length;

  return (
    <Navbar>
      <CheckOutBtn cartitemslength={cartitemslength}>Check out</CheckOutBtn>
      <VoidShop>Void Shop</VoidShop>
      <NavLinks>
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'shop'}>Shop </NavLink>
        <CartLink to={'cart'}>
          <CartItemsNum>
            {cartitemslength === 0 ? '' : cartitemslength}
          </CartItemsNum>
          <CgShoppingCart></CgShoppingCart>
        </CartLink>
      </NavLinks>
    </Navbar>
  );
}
