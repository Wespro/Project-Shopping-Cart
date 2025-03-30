import { itemsContext } from '@/Types/types';
import { createContext } from 'react';

const ItemsContext = createContext<itemsContext>({
  items: [],
  setItems: () => {},
  category: '',
  setCategory: () => {},
});

export default ItemsContext;
