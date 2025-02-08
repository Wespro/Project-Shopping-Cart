import { useEffect, useState } from 'react';

import './App.css';
import Nav from './comps/Nav';
import { Outlet } from 'react-router-dom';
import CartItemContext from './context/CartItemContext';
import ItemsContext from './context/itemsContext';
import styled from 'styled-components';

function App() {
  const [cartItemsArr, setCartItemsArr] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const ReqResult = await fetch(
        'https://fakestoreapi.com/products/category/electronics'
      );

      try {
        if (ReqResult.status >= 400) {
          throw new Error('Server error');
        }

        const data = await ReqResult.json();

        setItems([...data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <CartItemContext.Provider value={[cartItemsArr, setCartItemsArr]}>
        <ItemsContext.Provider value={[items, setItems]}>
          <AppWrapper>
            <Nav />
            <Outlet />
          </AppWrapper>
        </ItemsContext.Provider>
      </CartItemContext.Provider>
    </>
  );
}

export default App;
