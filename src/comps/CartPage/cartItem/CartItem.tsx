import React from 'react';
import CartItemContext from '../../../context/CartItemContext';
import { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import {
  AddToCartCardBtn,
  CartITem,
  CartItemImage,
  InfoActionsContainer,
  ItemDescription,
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
  MinusItemBtn,
  PlusItemBtn,
  PriceLabel,
  PriceWrapper,
  TitleDescriptionWrapper,
} from './cartItemSC';
import { useNavigate } from 'react-router-dom';
import { cartItemType } from '@/Types/types';

export default function CartItem({ item }: { item: cartItemType }) {
  const { cartItemsObj, setCartItemsObj } = useContext(CartItemContext);
  const navigate = useNavigate();
  const editCartItemsObj = (action: string) => {
    switch (action) {
      case 'add':
        setCartItemsObj({
          ...cartItemsObj,
          [item.item.id]: {
            ...cartItemsObj[item.item.id],
            quantity: cartItemsObj[item.item.id].quantity + 1,
          },
        });
        break;
      case 'subtract':
        setCartItemsObj({
          ...cartItemsObj,
          [item.item.id]: {
            ...cartItemsObj[item.item.id],
            quantity: cartItemsObj[item.item.id].quantity - 1,
          },
        });
        break;

      case 'remove':
        const copyOfCartItemsObj = { ...cartItemsObj };
        delete copyOfCartItemsObj[item.item.id];
        setCartItemsObj(copyOfCartItemsObj);

        break;
      default:
        console.log('no Action made');
    }
  };

  const starsReviews = () => {
    let rate = Math.floor(item.item?.rating.rate);
    let starsArr = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        starsArr.push(
          <IoMdStar
            key={i}
            style={{ color: 'gold', fontSize: 'clamp(0.8rem, 1.5vw, 1.3rem)' }}
          />
        );
      } else {
        starsArr.push(
          <IoMdStar
            key={i}
            style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.3rem)' }}
          />
        );
      }
    }
    return starsArr;
  };
  return (
    <CartITem>
      <CartItemImage
        onClick={(e) => {
          navigate('/shop/' + item.item.id);
        }}
        style={{ backgroundImage: `url(${item.item.image})` }}
      ></CartItemImage>
      <InfoActionsContainer>
        <ItemInfoContainer>
          <TitleDescriptionWrapper>
            <ItemTitle>{item.item.title}</ItemTitle>
            <ItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              officia?
            </ItemDescription>
            <ItemReviewsWrapper>
              <ItemReviewsStarsWrapper>
                {starsReviews()}
              </ItemReviewsStarsWrapper>

              <ItemReviewsPeopleNum>
                ( {item.item?.rating.count || 0} )
              </ItemReviewsPeopleNum>
            </ItemReviewsWrapper>
          </TitleDescriptionWrapper>

          <PriceWrapper>
            <PriceLabel>Price </PriceLabel>

            <ItemPrice>{item.item?.price || 0}$ </ItemPrice>
          </PriceWrapper>
        </ItemInfoContainer>

        <ItemQuantityWrapper>
          <ItemQuantityLabel htmlFor={'howMany'}>How many?</ItemQuantityLabel>
          <ItemQuantityControls>
            <PlusItemBtn
              onClick={(e) => {
                item.quantity < 30 ? editCartItemsObj('add') : item.quantity;
              }}
            >
              +
            </PlusItemBtn>
            <ItemQuantityInput>{item.quantity}</ItemQuantityInput>
            <MinusItemBtn
              onClick={(e) => {
                item.quantity > 1
                  ? editCartItemsObj('subtract')
                  : item.quantity;
              }}
            >
              -
            </MinusItemBtn>
          </ItemQuantityControls>
        </ItemQuantityWrapper>
        <AddToCartCardBtn
          onClick={(e) => {
            editCartItemsObj('remove');
          }}
        >
          Remove
        </AddToCartCardBtn>
      </InfoActionsContainer>
    </CartITem>
  );
}
