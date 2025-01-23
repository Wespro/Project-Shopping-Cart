import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 90vh;
  flex-wrap: wrap;
`;
const HomeCont = styled.div`
  display: flex;
  width: 90rem;
  height: 70vh;
  box-shadow: 1px 1px 20px #f02d65;
`;
const MainMess = styled.h1`
  text-align: center;
`;
const MainMessCont = styled.div`
  width: 50%;
  height: 100%;
  background-color: #16191e;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
`;
const ImageCont = styled.div`
  width: 50%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/2453658/pexels-photo-2453658.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ShopNowBtn = styled.button`
  width: 10rem;
  height: 3.5rem;
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
