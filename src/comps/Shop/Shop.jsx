import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ItemsContext from '../../context/itemsContext';
import { useContext } from 'react';

const ShopPage = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Shop() {
  const [items, setItems] = useContext(ItemsContext);

  return (
    <ShopPage>
      <Outlet context={items} />
    </ShopPage>
  );
}
