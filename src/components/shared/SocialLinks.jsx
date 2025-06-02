import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialList = styled.ul`
  display: flex;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 4px 20px rgba(67, 56, 202, 0.3);
  }
`;

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/ayoubmori',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ayoub-taouabi/',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      url: 'https://x.com/AyoUb73091760',
      label: 'Twitter'
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/ayoubtaouabi/',
      label: 'Instagram'
    }
  ];

  return (
    <SocialContainer>
      <SocialList>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <SocialLink
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </SocialLink>
          </li>
        ))}
      </SocialList>
    </SocialContainer>
  );
};

export default SocialLinks;
