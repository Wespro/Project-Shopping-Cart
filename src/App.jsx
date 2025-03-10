import { useEffect, useState } from 'react';
import './App.css';
import Nav from './comps/Nav/Nav';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CartItemContext from './context/CartItemContext';
import ItemsContext from './context/ItemsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartItemContext.Provider value={[cartItemsSt, setCartItemsSt]}>
          <ItemsContext.Provider value={[items, setItems]}>
            <AppWrapper>
              <Nav />
              <Outlet />
            </AppWrapper>
          </ItemsContext.Provider>
        </CartItemContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
