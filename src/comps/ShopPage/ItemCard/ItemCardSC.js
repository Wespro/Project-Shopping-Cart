import styled from 'styled-components';

export const Card = styled.div`
  min-height: 30rem;
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

export const CardImageWrapper = styled.div`
  height: 50vh;
  min-height: 13rem;
  max-height: 12rem;
  padding: 1rem;
`;
export const CardImage = styled.div`
  height: 100%;
  background-image: url(${({ itemimage }) => itemimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  flex: 1;
`;
export const CardActions = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
export const ItemInfo = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: start;
`;
//ItemReviewsWrapper block
export const ItemReviewsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ItemReviewsStarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemReviewsPeopleNum = styled.p`
  font-size: 1.1rem;
`;
// ItemName block
export const ItemNameWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
`;
export const ItemName = styled.h2`
  font-size: 1rem;
`;
export const ItemDescription = styled.p``;

//CardPice block

export const CardPiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemPriceName = styled.h3``;

export const ItemPrice = styled.h2`
  font-size: 1.3rem;
  color: gold;
`;

//ItemQuantity block
export const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemQuantityLabel = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
`;
export const ItemQuantityInput = styled.h2`
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  padding: 0.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItemQuantityControls = styled.div`
  display: flex;
`;
export const PlusItemBtn = styled.button`
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
export const MinusItemBtn = styled.button`
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
export const AddToCartCardBtn = styled.button`
  color: white;
`;
