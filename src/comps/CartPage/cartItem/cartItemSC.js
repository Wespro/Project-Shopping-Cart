import styled from 'styled-components';

export const CartITem = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  padding: 2rem;
  background-color: #19191c;
  border-radius: 14px;
  justify-content: space-around;
  align-items: stretch;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
export const CartItemImage = styled.img`
  flex: 1 1 10rem;
  min-height: 10rem;
  display: flex;
  background-image: url(${({ itemimage }) => itemimage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

//InfoActionsContainer block
export const InfoActionsContainer = styled.div`
  flex: 3 1 30rem;

  height: 100%;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-flow: column;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

//InfoContainer block

export const ItemInfoContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TitleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemTitle = styled.h1`
  font-size: clamp(1rem, 1vw, 2rem);
  max-width: 40rem;
`;
export const ItemDescription = styled.p`
  font-size: clamp(0.8rem, 0.8vw, 1.2rem);
`;

//ItemReviewsWrapper block
export const ItemReviewsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ItemReviewsStarsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ItemReviewsPeopleNum = styled.p`
  font-size: 1rem;
`;

//PriceWrapper block
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const PriceLabel = styled.h3`
  font-size: clamp(0.6rem, 1.2rem, 1.5rem);
`;
export const ItemPrice = styled.h2`
  font-size: clamp(1.2rem, 1.5vw, 2.5rem);
  color: gold;
`;

//ItemQuantity block
export const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 100%;

    justify-content: center;
    gap: 0.5rem;
  }
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
  width: clamp(2.5rem, 2vw, 1.2rem);
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
  width: clamp(2.5rem, 2vw, 1.2rem);
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
