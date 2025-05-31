import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: #2D3748;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .heart-icon {
    color: #e25555;
  }

  .coffee-icon {
    color: #f8e076;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Copyright>&copy; {currentYear} Ayoub Taouabi. All rights reserved.</Copyright>
        <FooterText>
          Designed with{' '}
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          {' '}and a lot of{' '}
          <FontAwesomeIcon icon={faMugHot} className="coffee-icon" />
        </FooterText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
