import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './comps/Home';
import Shop from './comps/Shop/Shop';
import Cart from './comps/Cart/Cart';
import ItemPage from './comps/Shop/ItemPage';
import ItemsDisplay from './comps/Shop/ItemsDisplay';

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
