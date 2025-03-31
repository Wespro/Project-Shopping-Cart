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
  justify-content: space-around;
  padding: 1rem 10%;
  width: 90%;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  @media (max-width: 1121px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  flex: 2 1 auto;
  width: clamp(200px, 40%, 400px);
  padding: 0.5rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 50px;
  background-color: white;
  color: black;
  font-size: 1rem;
  &::placeholder {
    content: 'Search for items';
  }
`;
export const PriceFilterWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const PriceFilterInput = styled.input`
  flex: 1;
  width: clamp(200px, 30%, 400px);
  cursor: pointer;
  accent-color: #ff3679;
`;
export const PriceFilterValue = styled.h3`
  color: gold;
`;
export const Select = styled.select`
  flex: 1;
  width: clamp(200px, 10%, 300px);
  height: 35px;
  background: white;
  color: gray;
  padding: 0 1rem;
  border: none;
  appearance: none;
  border-radius: 5px;

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
  flex: 1 1 6rem;
  display: inline-block;
  color: #ff3679;
  font-size: 1.5rem;
  font-weight: bold;
`;
