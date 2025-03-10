import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const ShopPage = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export default function Shop() {
  return (
    <ShopPage>
      <Outlet />
    </ShopPage>
  );
}
