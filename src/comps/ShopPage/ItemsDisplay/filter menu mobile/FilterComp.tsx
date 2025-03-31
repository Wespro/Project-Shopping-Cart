import React, { useEffect, useRef } from 'react';
import {
  ItemsDisplayedNum,
  PriceFilterInput,
  PriceFilterValue,
  PriceFilterWrapper,
  SearchBar,
  Select,
} from '../ItemsDisplaySC';
import styled from 'styled-components';
import { LuFilter } from 'react-icons/lu';
import { FilterCompPropsType } from '@/Types/types';

const ItemsControlsMobile = styled.div`
  justify-self: start;
  width: clamp(18rem, 80vw, 100%);
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border-radius: 14px;
  box-shadow: 1px 1px 10px #f02d65;
  padding: 2rem;
  @media (max-width: 700px) {
    gap: 4.5rem;
  }
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
}: FilterCompPropsType) => {
  const itemsControls = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    itemsControls.current?.classList.add('hide');
  }, []);
  const showFilter = () => {
    //   ? (itemsControls.current.style.display = 'none')

    if (itemsControls.current?.classList.contains('hide')) {
      itemsControls.current.classList.remove('hide');
      itemsControls.current.classList.add('show');
      return;
    }
    itemsControls.current?.classList.add('hide');
    itemsControls.current?.classList.remove('show');
  };
  return (
    <>
      <FilterBtn onClick={showFilter}>Filters</FilterBtn>
      <ItemsControlsMobile ref={itemsControls}>
        <SearchBar
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          placeholder={`Search for Items`}
        ></SearchBar>
        <PriceFilterWrapper>
          <PriceFilterInput
            value={priceFilter}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPriceFilter(+e.target.value);
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
          <option value='lowestRateToHighest'> Lowest Rate To Highest </option>
          <option value='lowestPriceToHighest'>Lowest Price To Highest </option>
          <option value='highestPriceToLowest'>Highest Price To Lowest </option>
        </Select>
        <ItemsDisplayedNum>
          {filteredItems?.length} {filteredItems?.length > 1 ? 'items' : 'item'}
        </ItemsDisplayedNum>
      </ItemsControlsMobile>
    </>
  );
};

export default FilterComp;
