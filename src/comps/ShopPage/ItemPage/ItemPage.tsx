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
import { item } from '@/Types/types';
//this comp will display the item that was clicked on

//reducer fun i choose to make it outside the component to avoid it being redefined on every render
const reducer = (
  state: { itemQuantityDisplaySt: number },
  action: { type: 'add' | 'subtract' }
): { itemQuantityDisplaySt: number } => {
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
  const { items, category, setCategory, setItems } = useContext(ItemsContext);

  const { cartItemsObj, setCartItemsObj } = useContext(CartItemContext);
  // reduce
  const initialState: { itemQuantityDisplaySt: number } = {
    itemQuantityDisplaySt: 1,
  };
  const [quantity, dispatch] = useReducer<typeof reducer>(
    reducer,
    initialState
  );

  const item = items?.find((item: item) => {
    return item.id == Number(id);
  });

  const AddToCartCardBtnClickEvent = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (item) {
      if (cartItemsObj[`${item.id}`]) {
        setCartItemsObj({
          ...cartItemsObj,
          [`${item.id}`]: {
            ...cartItemsObj[`${item.id}`],
            quantity:
              cartItemsObj[`${item.id}`].quantity +
              quantity.itemQuantityDisplaySt,
          },
        });
      } else {
        setCartItemsObj({
          ...cartItemsObj,
          [`${item.id}`]: { item, quantity: quantity.itemQuantityDisplaySt },
        });
      }
    }
    // UI
    (e.target as HTMLButtonElement).style.backgroundColor = 'green';
    (e.target as HTMLButtonElement).textContent = 'Added';
    setTimeout(() => {
      (e.target as HTMLButtonElement).style.backgroundColor = '#f02d65';
      (e.target as HTMLButtonElement).textContent = 'Add To Cart';
    }, 1000);
  };

  const starsReviews = () => {
    if (item) {
      let rate = Math.floor(item?.rating?.rate);

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
    }
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
