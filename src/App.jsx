import { useState } from 'react';

import './App.css';
import Nav from './comps/Nav';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  const [cartItemsArr, setCartItemsArr] = useState([]);

  return (
    <>
      <Nav cartItemsArr={cartItemsArr} />
      <Outlet context={{ cartItemsArr, setCartItemsArr }} />
    </>
  );
}

export default App;
