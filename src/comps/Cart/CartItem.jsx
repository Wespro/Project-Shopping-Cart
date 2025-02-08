import React from 'react';
import styled from 'styled-components';
import CartItemContext from '../../context/CartItemContext';
import { useContext } from 'react';

const CartITem = styled.div`
  width: 95%;
  height: 250px;
  display: flex;
  padding: 1.5rem;
  background-color: #19191c;
  border-radius: 14px;
`;
const CartItemImage = styled.img`
  width: 30%;
  display: flex;
  background-image: url(${({ itemimage }) => itemimage});
  background-position: center;
  background-size: cover;
  border-radius: 14px;
`;
const CartItemTitle = styled.h1`
  width: 30%;
  display: flex;
  background-image: url(${({ itemimage }) => itemimage});
  background-position: center;
  background-size: cover;
`;
export default function CartItem() {
  const [cartItemsArr, setCartItemsArr] = useContext(CartItemContext);

  return (
    <CartITem>
      <CartItemImage
        onClick={() => setCartItemsArr([...cartItemsArr, { name: 'name' }])}
        itemimage='https://images.pexels.com/photos/3184452/pexels-photo-3184452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ></CartItemImage>
    </CartITem>
  );
}
