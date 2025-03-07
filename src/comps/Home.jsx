import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SuccessPage from './successComp/success';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-height: 90vh;

  @media (max-width: 932px) {
    padding: 3rem 0;
    align-items: start;
  }
`;
const HomeCont = styled.div`
  display: flex;
  width: 70%;
  min-width: 8rem;
  min-height: 30rem;
  box-shadow: 1px 1px 20px #f02d65;
  align-items: stretch;
  flex-wrap: wrap;
`;
const MainMessCont = styled.div`
  flex: 1 1 40rem;

  background-color: #16191e;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1850px) {
    flex: 1 1 20rem;
    height: 30rem;
  }
  @media (max-width: 600px) {
    flex: 1 1 15rem;
    height: 15rem;
  }
`;
const MainMess = styled.h1`
  font-size: clamp(1.5rem, 2vw, 3rem);
  text-align: center;
`;

const ImageCont = styled.div`
  flex: 1 1 40rem;

  background-image: url('https://images.pexels.com/photos/2453658/pexels-photo-2453658.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  @media (max-width: 1850px) {
    flex: 1 1 20rem;
    height: 30rem;
  }
  @media (max-width: 600px) {
    flex: 1 1 15rem;
    height: 15rem;
  }
`;
const ShopNowBtn = styled.button`
  width: clamp(8rem, 20vw, 12rem);
  padding: 0.7rem 0;
`;

const ShopBtnLink = styled(Link)`
  color: #eeeeee;
`;
export default function Home() {
  return (
    <HomeWrapper>
      <HomeCont>
        <MainMessCont>
          <MainMess>Get your Electronics</MainMess>
          <ShopNowBtn>
            <ShopBtnLink to='/shop'>Shop Now</ShopBtnLink>
          </ShopNowBtn>
        </MainMessCont>
        <ImageCont> </ImageCont>
      </HomeCont>
    </HomeWrapper>
  );
}
