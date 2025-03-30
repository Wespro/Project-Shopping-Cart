import { useCallback, useContext, useMemo, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import SuccessPage from '../../successComp/success';

export default function Cart() {
  const { cartItemsObj, setCartItemsObj } = useContext(CartItemContext);
  const [checkOut, setCheckOut] = useState(false);

  const navigate = useNavigate();
  const subtotal = useMemo(() => {
    let result = 0;
    for (let item in cartItemsObj) {
      if (cartItemsObj.hasOwnProperty(item)) {
        result += cartItemsObj[item].item.price * cartItemsObj[item].quantity;
      }
    }
    return result;
  }, [cartItemsObj]);

  const displayCartItems = () => {
    let items = [];
    if (Object.keys(cartItemsObj).length) {
      for (const key in cartItemsObj) {
        items.push(
          <CartItem key={cartItemsObj[key].item.id} item={cartItemsObj[key]} />
        );
      }
    }
    if (!items.length) {
      return (
        <>
          <NoItems>NO ITEMS IN CART</NoItems>
          <br />
          <button onClick={() => navigate('/shop')}>Shop now</button>
        </>
      );
    }
    return items;
  };

  const ClearItemsFunc = () => {
    setCartItemsObj({});
  };

  const checkoutFunc = useCallback(() => {
    if (Object.keys(cartItemsObj).length) {
      setCheckOut(true);
      setCartItemsObj({});
      const setTimeoutFunc = () => {
        navigate('/shop');
        setTimeout(() => setCheckOut(false), 2000);
      };
      setTimeout(setTimeoutFunc, 5000);
    }
  }, [cartItemsObj]);

  return (
    <CartWrapper>
      <CartItemsDisplay>
        <CartTitle>Your Cart</CartTitle>
        <CartItemsWrapper>
          {!checkOut ? displayCartItems() : <SuccessPage />}
        </CartItemsWrapper>
        <CartInvoiceWrapper>
          <SubtotalWrapper>
            <SubtotalLabel>Subtotal:</SubtotalLabel>
            <Subtotal>{Math.floor(subtotal)}$</Subtotal>
          </SubtotalWrapper>
          <hr />
          <TaxWrapper>
            <TaxLabel>Tax:</TaxLabel>
            <Tax>+2%</Tax>
          </TaxWrapper>
          <hr />
          <TotalWrapper>
            <TotalLabel>Total:</TotalLabel>
            <Total>{Math.floor(subtotal + subtotal * 0.02)}$</Total>
          </TotalWrapper>
        </CartInvoiceWrapper>
        <CartActionsWrapper>
          <ClearItemsButton onClick={ClearItemsFunc}>
            Clear Items
          </ClearItemsButton>
          <CheckOutButton onClick={checkoutFunc}>Check Out </CheckOutButton>
        </CartActionsWrapper>
      </CartItemsDisplay>
    </CartWrapper>
  );
}
