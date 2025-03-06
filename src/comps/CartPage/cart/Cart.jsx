import React, { useCallback, useContext, useMemo } from 'react';
import CartItemContext from '../../../context/CartItemContext';
import CartItem from '../cartItem/CartItem';
import {
  CartActionsWrapper,
  CartInvoiceWrapper,
  CartItemsDisplay,
  CartItemsWrapper,
  CartTitle,
  CartWrapper,
  CheckOutButton,
  ClearItemsButton,
  NoItems,
  Subtotal,
  SubtotalLabel,
  SubtotalWrapper,
  Tax,
  TaxLabel,
  TaxWrapper,
  Total,
  TotalLabel,
  TotalWrapper,
} from './CartSC';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartItemsSt, setCartItemsSt] = useContext(CartItemContext);

  const subtotal = useMemo(() => {
    let result = 0;
    for (let item in cartItemsSt) {
      if (cartItemsSt.hasOwnProperty(item)) {
        result += cartItemsSt[item].item.price * cartItemsSt[item].quantity;
      }
    }
    return result;
  }, [cartItemsSt]);

  const displayCartItems = () => {
    let items = [];
    if (Object.keys(cartItemsSt).length) {
      for (const key in cartItemsSt) {
        items.push(
          <CartItem key={cartItemsSt[key].item.id} item={cartItemsSt[key]} />
        );
      }
    }
    if (!items.length) {
    }
    return items;
  };

  const ClearItemsFunc = () => {
    setCartItemsSt({});
  };
  return (
    <CartWrapper>
      <CartItemsDisplay>
        <CartTitle>Your Cart</CartTitle>
        <CartItemsWrapper>
          {Object.keys(cartItemsSt).length ? (
            displayCartItems()
          ) : (
            <>
              <NoItems>NO ITEMS IN CART</NoItems>
              <br />
              <button>
                <Link style={{ color: 'black' }} to='/shop'>
                  {' '}
                  Shop now
                </Link>
              </button>
            </>
          )}
        </CartItemsWrapper>
        <CartInvoiceWrapper>
          <SubtotalWrapper>
            <SubtotalLabel>Subtotal:</SubtotalLabel>
            <Subtotal>{Math.floor(subtotal)}$</Subtotal>
          </SubtotalWrapper>
          <TaxWrapper>
            <TaxLabel>Tax:</TaxLabel>
            <Tax>+2%</Tax>
          </TaxWrapper>
          <TotalWrapper>
            <TotalLabel>Total:</TotalLabel>
            <Total>{Math.floor(subtotal + subtotal * 0.02)}$</Total>
          </TotalWrapper>
        </CartInvoiceWrapper>
        <CartActionsWrapper>
          <ClearItemsButton onClick={ClearItemsFunc}>
            Clear Items
          </ClearItemsButton>
          <CheckOutButton>Check Out </CheckOutButton>
        </CartActionsWrapper>
      </CartItemsDisplay>
    </CartWrapper>
  );
}
