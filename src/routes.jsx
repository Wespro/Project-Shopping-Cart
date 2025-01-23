import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './comps/Home';
import Shop from './comps/Shop/Shop';
import Cart from './comps/Cart/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
  ,
]);
