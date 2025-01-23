import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import { useOutletContext } from 'react-router-dom';
const CardsWrapper = styled.div`
  width: 90%;
  margin: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;
// const ItemsDisplayedNumWrapper = styled.div`
//   display: flex;
//   justify-content: end;
//   padding: 1rem 4rem;
//   width: 90%;
//   align-items: center;
// `;
// const ItemsDisplayedNum = styled.h2`
//   color: aliceblue;
// `;

export default function Shop() {
  const { itemsInCart, setItemsInCart, cartItemsArr, setCartItemsArr } =
    useOutletContext();

  const [items, setItems] = useState([]);
  useEffect(() => {
    // let ignore = false;
    async function fetchData() {
      const ReqResult = await fetch(
        'https://fakestoreapi.com/products/category/electronics?limit=8'
      );
      try {
        if (ReqResult.status >= 400) {
          throw new Error('Server error');
        }
        // if (!ignore) {
        const data = await ReqResult.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    // return () => {
    //   ignore = true;
    // };
  }, []);

  return (
    <>
      {/* <ItemsDisplayedNumWrapper>
        <ItemsDisplayedNum> {items.length} items</ItemsDisplayedNum>
      </ItemsDisplayedNumWrapper> */}
      <CardsWrapper>
        {items.map((item, index) => {
          return (
            <ItemCard
              key={item.id + item.title}
              item={item}
              cartItemsArr={cartItemsArr}
              setCartItemsArr={setCartItemsArr}
              setItemsInCart={setItemsInCart}
            />
          );
        })}
      </CardsWrapper>
    </>
  );
}
