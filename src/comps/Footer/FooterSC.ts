import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterEle = styled.footer`
  min-height: auto;
  width: 100%;
  padding: 2rem 10vw 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  background-color: #131315;
  color: white;

  box-shadow: 1px 1px 20px #f02d65;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  gap: 3rem;
`;
export const FooterSectionAU = styled.div`
  width: clamp(12rem, 80vw, 30rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  font-weight: bold;
`;
export const AboutUsContent = styled.p``;

export const FooterSectionQL = styled.div`
  width: clamp(12rem, 80vw, 25rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;
export const LinksList = styled.ul`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const QuickLinkLi = styled.li``;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
export const QuickLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const FooterSectionSM = styled.div`
  width: clamp(10rem, 30vw, 25rem);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.5rem;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
export const IconWrapper = styled.a`
  font-size: clamp(1.5rem, 1.5vw, 2rem);
`;
export const FooterBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;
export const Rights = styled.p`
  font-size: clamp(0.8rem, 0.8vw, 1.2rem);
`;
export const SignatureV = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.78rem, 0.8vw, 1.2rem);
`;
