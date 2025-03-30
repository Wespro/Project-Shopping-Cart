import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Carousel1 from './Carousel1';
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0;
  gap: 5rem;
  width: 100%;
  min-height: 100vh;
  background-color: #16191e;
`;
const HomeCont = styled.div`
  display: flex;
  width: 70%;
  min-width: 8rem;
  min-height: 30rem;
  box-shadow: 1px 1px 20px #f02d65;
  flex-wrap: wrap;
`;
const MainMessCont = styled.div`
  flex: 1 1 40rem;
  background-color: #16191e;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1850px) {
    flex: 1 1 40rem;
    height: 30rem;
  }
  @media (max-width: 600px) {
    flex: 1 1 15rem;
    height: 15rem;
  }
`;
const MainMess = styled.h1`
  width: clamp(8rem, 30vw, 30rem);
  font-size: clamp(1.1rem, 3vw, 2.4rem);
  text-align: center;
  line-height: 2;
`;

const ImageCont = styled.div`
  flex: 1 1 40rem;
  height: 30rem;
  background-image: url('https://images.pexels.com/photos/2453658/pexels-photo-2453658.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

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
const CarouselWrapper = styled.div`
  padding: 5rem;
  box-shadow: 1px 1px 7px #f02d65;
  width: 70%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    padding: 1rem;
    width: 90%;
  }
`;
export default function Home() {
  return (
    <HomeWrapper>
      <HomeCont>
        <MainMessCont>
          <MainMess>"Deals That Deliver, Quality That Lasts!"</MainMess>
          <ShopNowBtn>
            <ShopBtnLink to='/shop'>Shop Now</ShopBtnLink>
          </ShopNowBtn>
        </MainMessCont>
        <ImageCont> </ImageCont>
      </HomeCont>
      {/* <CarouselWrapper>
        <Carousel1 />
      </CarouselWrapper> */}
    </HomeWrapper>
  );
}
