import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.text.dark};
  color: white;
  padding: 3rem 1rem;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  .heart { color: #e25555; }
  .coffee { color: #f8e076; }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p style={{ fontWeight: 600 }}>Ayoub Taouabi</p>
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
        &copy; {new Date().getFullYear()} All Rights Reserved. [cite: 123-124]
      </p>
      <FooterText>
        Designed with <FontAwesomeIcon icon={faHeart} className="heart" /> and 
        <FontAwesomeIcon icon={faMugHot} className="coffee" /> [cite: 125]
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;