import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import useDebounce from '../../hoc/useDebounce';
// import useThrottle from '../../hoc/useThrottle';

import ItemsContext from '../../context/ItemsContext';

const CardsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;
const ItemsNumSearch = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 4rem;
  width: 90%;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 8%, 8rem);
  flex-wrap: wrap;
`;
const ItemsDisplayedNum = styled.h2`
  color: aliceblue;
`;

const SearchBar = styled.input`
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
const ItemsDisplay = () => {
  const [items, setItems] = useContext(ItemsContext);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchValue, setSearchValue] = useState('');
  // const throttleFunc = useThrottle(() => {
  //   console.log(searchValue);
  // }, 3000);

  const debounceVal = useDebounce(searchValue, 500);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  // update  filtered
  useEffect(() => {
    (() => {
      setFilteredItems(
        items.filter((item) => {
          return item.title.toLowerCase().includes(debounceVal.toLowerCase());
        })
      );
    })();
  }, [debounceVal]);

  // useEffect(() => {
  //   (() => {
  //     throttleFunc();
  //   })();
  // }, [searchValue]);
  return (
    <>
      <ItemsNumSearch>
        <SearchBar
          onInput={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          placeholder='Search for Items'
        ></SearchBar>
        <ItemsDisplayedNum> {items.length} items</ItemsDisplayedNum>
      </ItemsNumSearch>

      <CardsWrapper>
        {filteredItems.map((item, index) => {
          return <ItemCard key={item.id + item.title} item={item} />;
        })}
      </CardsWrapper>
    </>
  );
};

export default ItemsDisplay;
