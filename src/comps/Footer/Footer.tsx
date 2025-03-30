import React from 'react';

import {
  AboutUsContent,
  FooterBot,
  FooterEle,
  FooterSectionAU,
  FooterSectionQL,
  FooterSectionSM,
  FooterTop,
  IconWrapper,
  LinksList,
  NavLink,
  QuickLink,
  QuickLinkLi,
  Rights,
  SectionTitle,
  SignatureV,
  SocialsWrapper,
} from './FooterSC';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <FooterEle>
      <FooterTop>
        <FooterSectionAU>
          <SectionTitle>About Us</SectionTitle>
          <AboutUsContent>
            We are an online marketplace offering a wide range of products from
            various categories. Shop with us for the best deals and quality
            products.
          </AboutUsContent>
        </FooterSectionAU>
        <FooterSectionQL>
          <SectionTitle>Quick Links</SectionTitle>
          <LinksList>
            <QuickLinkLi>
              <NavLink to={'/'}>Home </NavLink>
            </QuickLinkLi>
            <QuickLinkLi>
              <NavLink to={'shop'}>Shop </NavLink>
            </QuickLinkLi>
            <QuickLinkLi>
              <QuickLink>Contact Us</QuickLink>
            </QuickLinkLi>
            <QuickLinkLi>
              <QuickLink>FAQ</QuickLink>{' '}
            </QuickLinkLi>
            <QuickLinkLi>
              <QuickLink>Privacy Policy</QuickLink>{' '}
            </QuickLinkLi>
          </LinksList>
        </FooterSectionQL>
        <FooterSectionSM>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialsWrapper>
            <IconWrapper>
              <FaFacebook />
            </IconWrapper>
            <IconWrapper>
              <FaSquareXTwitter />
            </IconWrapper>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <IconWrapper>
              <FaInstagram />
            </IconWrapper>
            <IconWrapper></IconWrapper>
          </SocialsWrapper>
        </FooterSectionSM>
      </FooterTop>
      <FooterBot>
        <Rights>© 2025 Void Shop. All rights reserved.</Rights>
        <SignatureV>
          Designed by{' '}
          <IconWrapper href='https://github.com/Wespro/Project-Shopping-Cart'>
            <FaGithub />
          </IconWrapper>{' '}
          Abdelrahman Mohammed
        </SignatureV>
      </FooterBot>
    </FooterEle>
  );
};

export default Footer;
