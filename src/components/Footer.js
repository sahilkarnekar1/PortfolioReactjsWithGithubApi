import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: transparent;
  color: #fff;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    position: static;
    width: auto;
    padding: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Your Website. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
