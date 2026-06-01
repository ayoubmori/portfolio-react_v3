import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'; 
import { useInView } from 'react-intersection-observer'; 
import ProfilePicture from '../shared/ProfilePicture';
import SocialLinks from '../shared/SocialLinks';
import { images, profileFallback } from '../../utils/images';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem; 
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url('/images/background.jpg') center/cover no-repeat; 
`;

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem; 

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`;

const HomeContent = styled.div`
  flex: 1;
  max-width: 600px;
  opacity: ${props => props.$visible ? 1 : 0}; 
  transform: translateY(${props => props.$visible ? '0' : '30px'}); 
  transition: all 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem); 
  color: #fff;
  margin-bottom: 1rem; 

  span {
    color: ${({ theme }) => theme.colors.primary}; 
  }
`;

// FIXED: Changed from 'p' to 'h2' for SEO keyword ranking
const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #E0E7FF; /*  */
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem; 

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const StyledButton = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600; 
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: ${({ theme }) => theme.colors.primary};
    color: white; 
    &:hover { background: ${({ theme }) => theme.colors.primaryDark}; } 
  }

  &.secondary {
    border: 2px solid white;
    color: white;
    &:hover { background: rgba(255, 255, 255, 0.1); } 
  }
`;

const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <HomeSection id="home">
      <HomeContainer>
        <HomeContent ref={ref} $visible={inView}>
          <Title>Hi, I'm <span>Ayoub Taouabi</span></Title>
          {/* SEO Improvement: Meaningful H2 Title */}
          <Subtitle>Data Analyst | AI & Automation Developer</Subtitle>
          <p style={{ color: '#fff', marginBottom: '2rem', lineHeight: '1.6' }}>
            Transforming complex data into strategic insights. I specialize in 
            building analytical workflows and machine learning models that drive 
            real-world impact through precision and storytelling.
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <SocialLinks />
          </div>
          <ButtonContainer>
            <StyledButton to="projects" smooth={true} className="primary" aria-label="Navigate to projects section">
              View My Projects
            </StyledButton>
            <StyledButton to="contact" smooth={true} className="secondary" aria-label="Navigate to contact section">
              Get In Touch
            </StyledButton>
          </ButtonContainer>
        </HomeContent>

        <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center' }}>
          <ProfilePicture
            src={images.profile}
            /* SEO Improvement: Specific Alt Text */
            alt="Ayoub Taouabi - Data Scientist and AI Specialist Professional Portfolio Image"
            fallback={profileFallback}
            size="clamp(250px, 30vw, 350px)" 
          />
        </div>
      </HomeContainer>
    </HomeSection>
  ); 
};

export default Home;