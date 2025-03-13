import React, { useEffect, useRef } from 'react';
import {
  ItemsDisplayedNum,
  PriceFilterInput,
  PriceFilterValue,
  PriceFilterWrapper,
  SearchBar,
  Select,
} from '../ItemsDisplay';
import styled from 'styled-components';
import { LuFilter } from 'react-icons/lu';

const ItemsControlsMobile = styled.div`
  width: clamp(18rem, 80vw, 82rem);

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border-radius: 14px;
  background-color: #343434;
  padding: 2rem;
`;

const FilterIcon = styled(LuFilter)`
  font-size: clamp(1.4rem, 1vw, 4rem);
  color: black;
  cursor: pointer;
  display: none;
  border-radius: 14px;
  @media (max-width: 1121px) {
    display: inline-block;
  }
`;
const FilterBtn = styled.button`
  font-size: clamp(1.2rem, 1vw, 4rem);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const FilterComp = ({
  searchValue,
  setSearchValue,
  priceFilter,
  setPriceFilter,
  setCategory,
  setSort,
  filteredItems,
}) => {
  const itemsControls = useRef();
  useEffect(() => {
    itemsControls.current.classList.add('hide');
  }, []);
  const showFilter = () => {
    // itemsControls.current.style.display === 'flex'
    //   ? (itemsControls.current.style.display = 'none')
    //   : (itemsControls.current.style.display = 'flex');
    if (itemsControls.current.classList.contains('hide')) {
      itemsControls.current.classList.remove('hide');
      itemsControls.current.classList.add('show');
      return;
    }
    itemsControls.current.classList.add('hide');
    itemsControls.current.classList.remove('show');
  };
  return (
    <>
      <FilterBtn onClick={showFilter}>
        Filters
        <FilterIcon />
      </FilterBtn>
      <ItemsControlsMobile ref={itemsControls}>
        <SearchBar
          onInput={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          placeholder='Search for Items'
        ></SearchBar>
        <PriceFilterWrapper>
          <PriceFilterInput
            value={priceFilter}
            onInput={(e) => {
              setPriceFilter(e.target.value);
            }}
            type='range'
            max={1000}
          />

          <PriceFilterValue>{priceFilter}$ </PriceFilterValue>
        </PriceFilterWrapper>
        <Select
          id='categories'
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value='all'>All </option>
          <option value='electronics'>Electronics </option>
          <option value='jewelery'>Jewelery </option>
          <option value={`men's clothing`}>Men's clothing </option>
          <option value={`women's clothing`}>Women's clothing</option>
        </Select>
        <Select
          onChange={(e) => {
            setSort(e.target.value);
          }}
          id='sort'
        >
          <option value='toLowestRate'> to Lowest Rate </option>
          <option value='toLowestPrice'>to Lowest price </option>
          <option value='toHighestPrice'>to Highest Price </option>
        </Select>
        <ItemsDisplayedNum>
          {filteredItems?.length} {filteredItems?.length > 1 ? 'items' : 'item'}
        </ItemsDisplayedNum>
      </ItemsControlsMobile>
    </>
  );
};

export default FilterComp;
