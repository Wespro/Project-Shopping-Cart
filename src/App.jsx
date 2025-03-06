import { useEffect, useState } from 'react';

import './App.css';
import Nav from './comps/Nav';
import { Outlet } from 'react-router-dom';
import CartItemContext from './context/CartItemContext';
import ItemsContext from './context/itemsContext';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
function App() {
  const [cartItemsSt, setCartItemsSt] = useState({});
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

  return (
    <>
      <CartItemContext.Provider value={[cartItemsSt, setCartItemsSt]}>
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
