import { createBrowserRouter } from 'react-router-dom';
import App from './App.js';
import Home from './comps/Home/Home.js';
import ItemPage from './comps/ShopPage/ItemPage/ItemPage.js';
import Shop from './comps/ShopPage/Shop.js';
import Cart from './comps/CartPage/cart/Cart.js';
import ItemsDisplay from './comps/ShopPage/ItemsDisplay/ItemsDisplay.js';

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
        ],
      },

      { path: '/cart', element: <Cart /> },
    ],
  },
]);
