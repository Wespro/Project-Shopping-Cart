import styled from 'styled-components';
import React, { act, useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import CartItemContext from '../../context/CartItemContext';

const Card = styled.div`
  height: 30rem;
  flex: 0 1 25rem;
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
  background-size: contain;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  flex: 1;
`;
const CardActions = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;
const ItemInfo = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: start;
`;
//ItemReviewsWrapper block
const ItemReviewsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ItemReviewsStarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemReviewsPeopleNum = styled.p`
  font-size: 1.1rem;
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
const ItemName = styled.h2`
  font-size: 1rem;
`;
const ItemDescription = styled.p``;

//CardPice block

const CardPiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemPriceName = styled.h3``;

const ItemPrice = styled.h2`
  font-size: 1.3rem;
  color: gold;
`;

//ItemQuantity block
const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemQuantityLabel = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
`;
const ItemQuantityInput = styled.h2`
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  padding: 0.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 2.5rem;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  align-self: center;

  &:hover {
    box-shadow: 1px 1px 5px #f02d65;
  }
`;
const MinusItemBtn = styled.button`
  background-color: #f02d65;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 2.5rem;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  align-self: center;

  &:hover {
    box-shadow: 1px 1px 5px #f02d65;
  }
`;
////////////////////////////////
const AddToCartCardBtn = styled.button`
  color: white;
`;

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
      <CardImage
        onClick={(e) => {
          navigate('/shop/' + item.id);
        }}
        itemimage={item.image}
      ></CardImage>
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
