import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard/ItemCard';
import useDebounce from '../../hoc/useDebounce';
// import useThrottle from '../../hoc/useThrottle';
import ItemsContext from '../../context/ItemsContext';
import { useQuery } from '@tanstack/react-query';

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
  //context
  const [items, setItems] = useContext(ItemsContext);
  const fetchItems = async () => {
    let data = [];

    const ReqResult = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    );

    try {
      if (ReqResult.status >= 400) {
        throw new Error('Server error');
      }

      data = await ReqResult.json();
      setItems(data);
      return data || [];
    } catch (err) {
      console.log(err);
    }
  };
  const { isPending } = useQuery({
    queryFn: () => fetchItems(),
    queryKey: ['shopItems'],
  });
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const throttleFunc = useThrottle(() => {
  //   console.log(searchValue);
  // }, 3000);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  // update  filtered
  const debounceVal = useDebounce(searchValue, 500);
  useEffect(() => {
    (() => {
      setFilteredItems(
        items?.filter((item) => {
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
        <ItemsDisplayedNum>
          {filteredItems?.length} {filteredItems?.length > 1 ? 'items' : 'item'}
        </ItemsDisplayedNum>
      </ItemsNumSearch>

      <CardsWrapper>
        {isPending ? (
          <h1>Loading...</h1>
        ) : (
          filteredItems?.map((item) => {
            return <ItemCard key={item.id + item.title} item={item} />;
          })
        )}
      </CardsWrapper>
    </>
  );
};

export default ItemsDisplay;
