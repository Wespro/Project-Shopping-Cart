import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './comps/Home';
import ItemPage from './comps/ShopPage/ItemPage/ItemPage';
import Shop from './comps/ShopPage/Shop';

import Cart from './comps/CartPage/cart/Cart';
import ItemsDisplay from './comps/ShopPage/ItemsDisplay/ItemsDisplay.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/shop',
        element: <Shop />,
        children: [
          { index: true, element: <ItemsDisplay /> },
          { path: ':id', element: <ItemPage /> },
          ,
        ],
      },

      { path: '/cart', element: <Cart /> },
    ],
  },
  ,
]);
