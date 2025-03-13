import styled from 'styled-components';

export const CardsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;
export const ItemsControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 10%;
  width: 90%;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 1121px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  width: clamp(200px, 40%, 400px);
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 1rem;
  &::placeholder {
    content: 'Search for items';
  }
`;
export const PriceFilterWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const PriceFilterInput = styled.input`
  width: clamp(200px, 30%, 400px);
  cursor: pointer;
`;
export const PriceFilterValue = styled.h3`
  color: gold;
`;
export const Select = styled.select`
  width: clamp(150px, 10%, 200px);
  height: 35px;
  background: white;
  color: gray;
  padding: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  &focus {
    outline: none;
  }
`;
export const ItemsDisplayedNum = styled.h2`
  color: aliceblue;
`;
