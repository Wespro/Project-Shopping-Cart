import { useContext, useEffect, useMemo, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import useDebounce from '../../../hoc/useDebounce';
// import useThrottle from '../../hoc/useThrottle';
import ItemsContext from '../../../context/ItemsContext';

import { CardsWrapper } from './ItemsDisplaySC';
import FilterComp from './filter menu mobile/FilterComp';
import { item } from '@/Types/types';
import useItems from '@/hoc/useItems';

const ItemsDisplay = () => {
  //context
  const { items, category, setCategory, setItems } = useContext(ItemsContext);
  // state
  const [priceFilter, setPriceFilter] = useState(1000);
  // const [category, setCategory] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState('toLowestRate');
  const [filteredItems, setFilteredItems] = useState(items);

  const sortFilter = (itemToSort: item[]) => {
    switch (sort) {
      case 'lowestRateToHighest':
        const toLowestRate = itemToSort.toSorted((a: item, b: item) => {
          // First sort by rate in descending order
          if (Math.floor(b.rating.rate) !== Math.floor(a.rating.rate)) {
            return b.rating.rate - a.rating.rate;
          }

          // If rates are equal, sort by count in descending order
          return Math.floor(b.rating.count) - Math.floor(a.rating.count);
        });

        return toLowestRate;
        break;
      case 'highestPriceToLowest':
        const toLowestPriceFiltered = itemToSort.toSorted(
          (a: item, b: item) => Math.floor(b.price) - Math.floor(a.price)
        );

        return toLowestPriceFiltered;
        break;
      case 'lowestPriceToHighest':
        const toHighestPriceFiltered = itemToSort.toSorted(
          (a: item, b: item) => Math.floor(a.price) - Math.floor(b.price)
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
    let searchedAndPriced = items.filter((item) => {
      if (typeof debounceSearchedVal === 'string') {
        return (
          item.price <= Number(priceFilter) &&
          item.title.toLowerCase().includes(debounceSearchedVal.toLowerCase())
        );
      }
    });
    let sorted = sortFilter(searchedAndPriced);

    setFilteredItems(sorted);
  };
  // deep Comparison while maintaining performance
  const itemsArr = useMemo(() => items, [items]);
  //filter effect
  useEffect(() => {
    filter();
  }, [itemsArr, debouncePriceFilter, sort, debounceSearchedVal]);

  //Tanstak custome Hook
  const { isPending } = useItems(category, setItems);
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
