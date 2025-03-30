import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const ShopPage = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 4rem 0;
  gap: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default function Shop() {
  return (
    <ShopPage>
      <Outlet />
    </ShopPage>
  );
}
