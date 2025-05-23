import styled from 'styled-components';

export const CartWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
`;

export const CartItemsDisplay = styled.div`
  width: clamp(10rem, 90vw, 80rem);
  min-height: 80vh;
  background-color: #2c313b;
  border-radius: 14px;
  box-shadow: 1px 1px 15px #f02d65;
  display: flex;
  flex-direction: column;
`;
export const CartTitle = styled.h1`
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 2rem;
  text-align: center;
  font-weight: bold;
`;
export const CartItemsWrapper = styled.div`
  flex: 2 1 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
export const NoItems = styled.h1`
  font-size: clamp(1.8rem, 3vw, 3rem);
  text-align: center;
  color: #f02d65;
`;
export const CartInvoiceWrapper = styled.div`
  padding: 1rem 2.5rem;
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
`;

export const SubtotalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;
export const SubtotalLabel = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;
export const Subtotal = styled.h2`
  color: gold;
  font-weight: bold;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;

export const TaxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;
export const TaxLabel = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;
export const Tax = styled.h2`
  color: #f02d65;
  font-weight: bold;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;
export const TotalLabel = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;
export const Total = styled.h2`
  color: gold;
  font-weight: bold;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;

export const CartActionsWrapper = styled.div`
  flex: 0 0 auto;
  padding: 1rem 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ClearItemsButton = styled.button`
  font-size: clamp(0.8rem, 1vw, 2rem);
  background-color: #f02d65;
`;

export const CheckOutButton = styled.button`
  font-size: clamp(0.8rem, 1vw, 2rem);
  background-color: green;
`;
