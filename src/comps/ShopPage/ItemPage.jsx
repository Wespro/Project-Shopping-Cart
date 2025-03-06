import React, { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import CartItemContext from '../../context/CartItemContext';
import ItemsContext from '../../context/ItemsContext';
import styled from 'styled-components';
import { IoMdStar } from 'react-icons/io';
//this comp will display the item that was clicked on
//styled components
const ItemWrapper = styled.div`
  display: flex;
  width: clamp(350px, 60vw, 60vw);
  min-height: 60vh;
  background-color: #2c313b;
  border-radius: 14px;
  flex-wrap: wrap;
  align-items: center;
`;

//ImgContainer block
const ImgContainer = styled.div`
  display: flex;
  place-content: center;
  flex: 1 1 25rem;
  padding: 2rem;
  height: 60vh;
  border-radius: 14px;
  @media (max-width: 632px) {
    height: 20rem;
  }
`;
const ItemImg = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 20px;
`;

//InfoActionsContainer block
const InfoActionsContainer = styled.div`
  height: 100%;
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  gap: 1.5rem;
  flex-flow: column;
  flex: 1 1 25rem;
`;

//InfoContainer block

const ItemInfoContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 2rem;
`;

const TitleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemTitle = styled.h1`
  font-size: clamp(1rem, 1.6rem, 2rem);
`;
const ItemDescription = styled.p`
  font-size: clamp(0.6rem, 1.2rem, 1.2rem);
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

//PriceWrapper block
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;
const PriceLabel = styled.h3`
  font-size: clamp(0.6rem, 1.2rem, 1.5rem);
`;
const ItemPrice = styled.h2`
  font-size: clamp(1rem, 2rem, 2.5rem);
  color: gold;
`;

//ItemQuantity block
const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemQuantityLabel = styled.label`
  font-size: clamp(0.8rem, 1.1rem, 1.8rem);
  font-weight: bold;
`;
const ItemQuantityInput = styled.h2`
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  padding: 1rem;
  width: 1.5rem;
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
const ItemPage = () => {
  const { id } = useParams();
  //context
  const [items, setItems] = useContext(ItemsContext);
  const [cartItemsArr, setCartItemsArr] = useContext(CartItemContext);
  // reduce
  const [quantity, dispatch] = useReducer(reducer, {
    itemQuantityDisplaySt: 1,
  });
  const item = items.find((item) => {
    return item.id == Number(id);
  });

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
    <ItemWrapper>
      <ImgContainer>
        <ItemImg src={item?.image || ''} />
      </ImgContainer>
      <InfoActionsContainer>
        <ItemInfoContainer>
          <TitleDescriptionWrapper>
            <ItemTitle>{item?.title || ''}</ItemTitle>
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
          </TitleDescriptionWrapper>
        </ItemInfoContainer>

        <PriceWrapper>
          <PriceLabel>Price </PriceLabel>
          <ItemPrice>{item?.price || 0}$ </ItemPrice>
        </PriceWrapper>

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
      </InfoActionsContainer>
    </ItemWrapper>
  );
};
3;

export default ItemPage;
