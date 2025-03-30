import { cartItemsObjContext } from '@/Types/types';
import { createContext } from 'react';

const CartItemContext = createContext<cartItemsObjContext>({
  cartItemsObj: {},
  setCartItemsObj: () => {},
});

export default CartItemContext;
