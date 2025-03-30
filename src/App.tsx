import { useState } from 'react';
import './App.css';
import Nav from './comps/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CartItemContext from './context/CartItemContext';
import ItemsContext from './context/ItemsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Footer from './comps/Footer/Footer';
import { cartItemType, item } from './Types/types';

// Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// tanstack
const queryClient = new QueryClient();

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;
const MainCont = styled.main`
  min-height: 100vh;
  width: 100%;
`;

function App() {
  const [cartItemsObj, setCartItemsObj] = useState<{
    [key: number]: cartItemType;
  }>({});
  const [items, setItems] = useState<item[]>([]);
  const [category, setCategory] = useState<string>('all');

  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartItemContext.Provider value={{ cartItemsObj, setCartItemsObj }}>
          <ItemsContext.Provider
            value={{
              items,
              category: category,
              setCategory,
              setItems,
            }}
          >
            <AppWrapper>
              <Nav />
              <MainCont>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={400}
                    classNames='fade'
                  >
                    <Outlet />
                  </CSSTransition>
                </TransitionGroup>
              </MainCont>
              <Footer />
            </AppWrapper>
          </ItemsContext.Provider>
        </CartItemContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
