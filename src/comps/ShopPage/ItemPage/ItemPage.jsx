import React, { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import CartItemContext from '../../../context/CartItemContext';
import ItemsContext from '../../../context/ItemsContext';
import { IoMdStar } from 'react-icons/io';
import {
  AddToCartCardBtn,
  ImgContainer,
  InfoActionsContainer,
  ItemDescription,
  ItemImg,
  ItemInfoContainer,
  ItemPrice,
  ItemQuantityControls,
  ItemQuantityInput,
  ItemQuantityLabel,
  ItemQuantityWrapper,
  ItemReviewsPeopleNum,
  ItemReviewsStarsWrapper,
  ItemReviewsWrapper,
  ItemTitle,
  ItemWrapper,
  MinusItemBtn,
  PlusItemBtn,
  PriceLabel,
  PriceWrapper,
  TitleDescriptionWrapper,
} from './ItemPageSC';
//this comp will display the item that was clicked on

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
    // UI
    e.target.style.backgroundColor = 'green';
    e.target.textContent = 'Added';
    setTimeout(() => {
      e.target.style.backgroundColor = '#f02d65';
      e.target.textContent = 'Add To Cart';
    }, 1000);
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
