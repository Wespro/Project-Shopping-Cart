import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import CartItemContext from '../../context/CartItemContext';

const CartWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartItemsDisplay = styled.div`
  width: 70%;
  height: 80vh;
  background-color: #2c313b;
  border-radius: 14px;
  box-shadow: 1px 1px 15px #f02d65;
`;
const CartTitle = styled.h1`
  margin: 2rem;
`;
const CartItemsWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartInvoiceWrapper = styled.div``;
const CartActionsWrapper = styled.div``;
export default function Cart() {
  return (
    <CartWrapper>
      <CartItemsDisplay>
        <CartTitle>Your Cart</CartTitle>
        <CartItemsWrapper>
          <CartItem />
        </CartItemsWrapper>
        <CartInvoiceWrapper></CartInvoiceWrapper>
        <CartActionsWrapper></CartActionsWrapper>
      </CartItemsDisplay>
    </CartWrapper>
  );
}
