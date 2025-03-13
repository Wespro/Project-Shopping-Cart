import React, { useContext, useEffect, useMemo, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import useDebounce from '../../../hoc/useDebounce';
// import useThrottle from '../../hoc/useThrottle';
import ItemsContext from '../../../context/ItemsContext';
import { useQuery } from '@tanstack/react-query';

import {
  CardsWrapper,
  ItemsControls,
  ItemsDisplayedNum,
  PriceFilterInput,
  PriceFilterValue,
  PriceFilterWrapper,
  SearchBar,
  Select,
} from './ItemsDisplay';
import FilterComp from './filter menu mobile/FilterComp';

const ItemsDisplay = () => {
  //context
  const [items, setItems] = useContext(ItemsContext);
  // state
  const [priceFilter, setPriceFilter] = useState(1000);
  const [category, setCategory] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState('toLowestRate');
  const [filteredItems, setFilteredItems] = useState(items);

  const sortFilter = (itemToSort) => {
    switch (sort) {
      case 'toLowestRate':
        const toLowestRate = itemToSort.toSorted((a, b) => {
          // First sort by rate in descending order
          if (Math.floor(b.rating.rate) !== Math.floor(a.rating.rate)) {
            return b.rating.rate - a.rating.rate;
          }

          // If rates are equal, sort by count in descending order
          return Math.floor(b.rating.count) - Math.floor(a.rating.count);
        });

        return toLowestRate;
        break;
      case 'toLowestPrice':
        const toLowestPriceFiltered = itemToSort.toSorted(
          (a, b) => Math.floor(b.price) - Math.floor(a.price)
        );

        return toLowestPriceFiltered;
        break;
      case 'toHighestPrice':
        const toHighestPriceFiltered = itemToSort.toSorted(
          (a, b) => Math.floor(a.price) - Math.floor(b.price)
        );

        return toHighestPriceFiltered;
        break;
      default:
        return itemToSort;
    }
  };

  const debounceSearchedVal = useDebounce(searchValue, 500);
  const debouncePriceFilter = useDebounce(priceFilter, 500);
  const filter = () => {
    let priced = items.filter((item) => {
      return item.price <= Number(priceFilter);
    });

    let searchAndPriced = priced.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(debounceSearchedVal.toLowerCase());
    });

    let sorted = sortFilter(searchAndPriced);

    setFilteredItems(sorted);
  };
  // deep Comparison while maintaining performance
  const itemsArr = useMemo(() => items, [items]);
  //filter effect
  useEffect(() => {
    filter();
  }, [itemsArr, debouncePriceFilter, sort, debounceSearchedVal]);

  // Tanstack
  const fetchItems = async () => {
    let data = [];
    let url = 'https://fakestoreapi.com/products';
    category === 'all' ? url : (url = `${url}/category/${category}`);

    const ReqResult = await fetch(url);

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
    queryKey: ['shopItems', category],
  });

  //////////////////////////////

  // useThrottle
  // const throttleFunc = useThrottle(() => {
  //   console.log(searchValue);
  // }, 3000);

  // useEffect(() => {
  //   (() => {
  //     throttleFunc();
  //   })();
  // }, [searchValue]);
  ////////////////////////////////////////

  // update  filtered

  return (
    <>
      <FilterComp
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        setCategory={setCategory}
        setSort={setSort}
        filteredItems={filteredItems}
      />
      {/* <ItemsControls>
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
      </ItemsControls> */}

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
