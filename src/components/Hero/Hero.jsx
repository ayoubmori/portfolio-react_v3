import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../shared/LazyImage';
import { images, profileFallback } from '../../utils/images';
import heroImage from '/images/ayoub-img.jpg';
import backgroundImage from '/images/background.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/background.jpg') center/cover no-repeat;
  padding: 0 1rem;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: all 0.6s ease-out;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: all 0.6s ease-out;
  transition-delay: 0.2s;
`;

const HeroImage = styled(LazyImage)`
  border: 4px solid #4338CA;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;

  .highlight {
    color: #4338CA;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #E0E7FF;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #fff;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &.primary {
    background: #4338CA;
    color: white;
    border: 2px solid #4338CA;

    &:hover {
      background: #3730A3;
      border-color: #3730A3;
    }
  }

  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Hero = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent ref={contentRef} visible={contentInView}>
          <Title>Hi, I'm <span className="highlight">Ayoub Taouabi</span></Title>
          <Subtitle>A Passionate Junior Data Scientist</Subtitle>
          <Description>
            Transforming raw data into strategic insights that drive impact. 
            Passionate about analytics, precision, and storytelling through data.
          </Description>
          <ButtonContainer>
            <Button
              to="projects"
              smooth={true}
              duration={500}
              className="primary"
            >
              View My Projects
            </Button>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              className="secondary"
            >
              Get In Touch
            </Button>
          </ButtonContainer>
        </HeroContent>
        <HeroImageContainer ref={imageRef} visible={imageInView}>          <HeroImage
            src={images.profile}
            alt="Ayoub Taouabi - Profile Picture"
            fallback={profileFallback}
            width="300px"
            height="300px"
            borderRadius="50%"
            objectFit="cover"
          />
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
