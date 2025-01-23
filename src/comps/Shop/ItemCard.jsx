import styled from 'styled-components';
import React, { useState } from 'react';
const Card = styled.div`
  height: 35rem;
  flex: 1;
  flex-basis: 30rem;
  border-radius: 14px;
  box-shadow: 1px 1px 10px #f02d65;
  display: flex;
  flex-direction: column;
  background-color: #16191e;
  transition: 300ms ease;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 30px #f02d65;
  }
`;
const CardImage = styled.div`
  background-image: url(${({ itemimage }) => itemimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  flex: 1;
`;
const CardActions = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 2rem;
`;
const ItemInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: start;
`;
// ItemName block
const ItemNameWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
`;
const ItemName = styled.h2``;
const ItemDescription = styled.p``;

//CardPice block

const CardPiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const ItemPriceName = styled.h3``;

const ItemPrice = styled.h2`
  font-size: 2.2rem;
  color: #f02d65;
`;

//ItemQuantity block
const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemQuantityLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;
const ItemQuantityInput = styled.h2`
  text-align: center;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 1.3rem;
  padding: 0.5rem;
  width: 3rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  box-shadow: 1px 1px 10px #f02d65;
`;
const ItemQuantityControls = styled.div`
  display: flex;
`;
const PlusItemBtn = styled.button`
  background-color: #f02d65;
  color: white;
  border: none;

  font-size: 1.5rem;
  padding: 0.5rem;
  width: 3rem;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:hover {
    box-shadow: 1px 1px 5px #f02d65;
  }
`;
const MinusItemBtn = styled.button`
  background-color: #f02d65;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 3rem;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    box-shadow: 1px 1px 5px #f02d65;
  }
`;
////////////////////////////////
const AddToCartCardBtn = styled.button`
  color: white;
`;
export default function ItemCard({
  item,
  cartItemsArr,
  setCartItemsArr,
  setItemsInCart,
}) {
  const [itemQuantityDisplaySt, setItemQuantityDisplaySt] = useState(1);

  const AddToCartCardBtnClickEvent = (e) => {
    setCartItemsArr([...cartItemsArr, item]);
  };
  return (
    <Card>
      <CardImage itemimage={item.image}></CardImage>

      <CardActions>
        <ItemInfo>
          <ItemNameWrapper>
            <ItemName>{item.title}</ItemName>
            <ItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              officia?
            </ItemDescription>
          </ItemNameWrapper>

          <CardPiceWrapper>
            <ItemPriceName>Price:</ItemPriceName>
            <ItemPrice>{`${item.price}$`}</ItemPrice>
          </CardPiceWrapper>
        </ItemInfo>

        <ItemQuantityWrapper>
          <ItemQuantityLabel htmlFor={'howMany'}>How many?</ItemQuantityLabel>
          <ItemQuantityControls>
            <PlusItemBtn
              onClick={(e) => {
                itemQuantityDisplaySt < 30
                  ? setItemQuantityDisplaySt(itemQuantityDisplaySt + 1)
                  : itemQuantityDisplaySt;
              }}
            >
              +
            </PlusItemBtn>
            <ItemQuantityInput>{itemQuantityDisplaySt}</ItemQuantityInput>
            <MinusItemBtn
              onClick={(e) => {
                itemQuantityDisplaySt > 1
                  ? setItemQuantityDisplaySt(itemQuantityDisplaySt - 1)
                  : itemQuantityDisplaySt;
              }}
            >
              -
            </MinusItemBtn>
          </ItemQuantityControls>
        </ItemQuantityWrapper>

        <AddToCartCardBtn onClick={AddToCartCardBtnClickEvent}>
          {' '}
          Add To Cart
        </AddToCartCardBtn>
      </CardActions>
    </Card>
  );
}
