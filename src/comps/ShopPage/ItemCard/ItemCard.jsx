import styled from 'styled-components';
import React, { act, useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import CartItemContext from '../../../context/CartItemContext';
import {
  AddToCartCardBtn,
  Card,
  CardActions,
  CardImage,
  CardImageWrapper,
  CardPiceWrapper,
  ItemDescription,
  ItemInfo,
  ItemName,
  ItemNameWrapper,
  ItemPrice,
  ItemPriceName,
  ItemQuantityControls,
  ItemQuantityInput,
  ItemQuantityLabel,
  ItemQuantityWrapper,
  ItemReviewsPeopleNum,
  ItemReviewsStarsWrapper,
  ItemReviewsWrapper,
  MinusItemBtn,
  PlusItemBtn,
} from './ItemCardSC';

//reducer fun i choose to make it outside the component to avoid it being redefined on every render
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        itemQuantityDisplaySt: state.itemQuantityDisplaySt + 1,
      };
    case 'subtract':
      return {
        ...state,
        itemQuantityDisplaySt: state.itemQuantityDisplaySt - 1,
      };
  }
};
export default function ItemCard({ item }) {
  const navigate = useNavigate();

  //context

  const [cartItemsArr, setCartItemsArr] = useContext(CartItemContext);

  const AddToCartCardBtnClickEvent = (e) => {
    if (cartItemsArr[`${item.id}`]) {
      setCartItemsArr({
        ...cartItemsArr,
        [`${item.id}`]: {
          ...cartItemsArr[`${item.id}`],
          quantity:
            cartItemsArr[`${item.id}`].quantity +
            quantity.itemQuantityDisplaySt,
        },
      });
    } else {
      setCartItemsArr({
        ...cartItemsArr,
        [`${item.id}`]: { item, quantity: quantity.itemQuantityDisplaySt },
      });
    }
    // UI
    e.target.style.backgroundColor = 'green';
    e.target.textContent = 'Added';
    setTimeout(() => {
      e.target.style.backgroundColor = '#f02d65';
      e.target.textContent = 'Add To Cart';
    }, 1000);
  };

  const [quantity, dispatch] = useReducer(reducer, {
    itemQuantityDisplaySt: 1,
  });
  const starsReviews = () => {
    let rate = Math.floor(item?.rating.rate);

    let starsArr = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        starsArr.push(
          <IoMdStar key={i} style={{ color: 'gold', fontSize: '1.4rem' }} />
        );
      } else {
        starsArr.push(<IoMdStar key={i} style={{ fontSize: '1.4rem' }} />);
      }
    }

    return starsArr;
  };
  return (
    <Card>
      <CardImageWrapper>
        <CardImage
          onClick={(e) => {
            navigate('/shop/' + item.id);
          }}
          itemimage={item.image}
        ></CardImage>
      </CardImageWrapper>
      <CardActions>
        <ItemInfo
          onClick={(e) => {
            navigate('/shop/' + item.id);
          }}
        >
          <ItemNameWrapper>
            <ItemName>
              {item.title.substring(0, 50)}...)
              <a href='' style={{ color: '#ff3679' }}>
                {' '}
                see more
              </a>
            </ItemName>
            <ItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              officia?
            </ItemDescription>
            <ItemReviewsWrapper>
              <ItemReviewsStarsWrapper>
                {starsReviews()}
              </ItemReviewsStarsWrapper>

              <ItemReviewsPeopleNum>
                ( {item?.rating.count || 0} )
              </ItemReviewsPeopleNum>
            </ItemReviewsWrapper>
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
                quantity.itemQuantityDisplaySt < 30
                  ? dispatch({ type: 'add' })
                  : quantity.itemQuantityDisplaySt;
              }}
            >
              +
            </PlusItemBtn>
            <ItemQuantityInput>
              {quantity.itemQuantityDisplaySt}
            </ItemQuantityInput>
            <MinusItemBtn
              onClick={(e) => {
                quantity.itemQuantityDisplaySt > 1
                  ? dispatch({ type: 'subtract' })
                  : quantity.itemQuantityDisplaySt;
              }}
            >
              -
            </MinusItemBtn>
          </ItemQuantityControls>
        </ItemQuantityWrapper>

        <AddToCartCardBtn onClick={AddToCartCardBtnClickEvent}>
          Add To Cart
        </AddToCartCardBtn>
      </CardActions>
    </Card>
  );
}
