import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
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
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
export const VoidShop = styled.h1`
  font-size: clamp(1.5rem, 1.5vw, 4rem);
  text-shadow: 1px 1px 7px #f02d65;
`;
export const NavLinks = styled.ul`
  width: clamp(10rem, 20%, 30rem);
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-content: center;
`;
export const CheckOutBtn = styled.button`
  color: white;
  position: absolute;
  transform: translate(1700px, 65px) scale(1);
  transition: 300ms ease;
  display: ${({ cartItemsLength }) =>
    cartItemsLength > 0 ? 'inline' : 'none'};
`;

export const NavLink = styled(Link)`
  font-size: clamp(0.8rem, 1.2vw, 2rem);
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
export const CartLink = styled(Link)`
  font-size: clamp(2rem, 3vw, 3rem);
  display: flex;
  align-items: center;
  position: relative;
`;
export const CartItemsNum = styled.p`
  font-size: clamp(0.8rem, 1.5rem, 2rem);
  color: gold;
  position: absolute;
  font-weight: bold;
  bottom: -10px;
  right: -8px;
`;
