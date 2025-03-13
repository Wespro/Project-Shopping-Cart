import styled from 'styled-components';

//styled components
export const ItemWrapper = styled.div`
  display: flex;
  width: clamp(320px, 70vw, 70rem);
  min-height: 60vh;
  background-color: #2c313b;
  border-radius: 14px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

//ImgContainer block
export const ImgContainer = styled.div`
  display: flex;
  place-content: center;
  flex: 1 1 25rem;
  padding: 2rem;
  height: 55vh;
  border-radius: 14px;
  @media (max-width: 632px) {
    height: 20rem;
    width: 20rem;
  }
`;
export const ItemImg = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 20px;
`;

//InfoActionsContainer block
export const InfoActionsContainer = styled.div`
  height: 100%;
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  gap: 1.5rem;
  flex-flow: column;
  flex: 1 1 25rem;
`;

//InfoContainer block

export const ItemInfoContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 2rem;
`;

export const TitleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemTitle = styled.h1`
  font-size: clamp(1rem, 1.6rem, 2rem);
`;
export const ItemDescription = styled.p`
  font-size: clamp(0.6rem, 1.2rem, 1.2rem);
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

//PriceWrapper block
export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;
export const PriceLabel = styled.h3`
  font-size: clamp(0.6rem, 1.2rem, 1.5rem);
`;
export const ItemPrice = styled.h2`
  font-size: clamp(1rem, 2rem, 2.5rem);
  color: gold;
`;

//ItemQuantity block
export const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemQuantityLabel = styled.label`
  font-size: clamp(0.8rem, 1.1rem, 1.8rem);
  font-weight: bold;
`;
export const ItemQuantityInput = styled.h2`
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  padding: 1rem;
  width: 1.5rem;
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
export const AddToCartCardBtn = styled.button`
  color: white;
`;
