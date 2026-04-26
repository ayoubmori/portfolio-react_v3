import React from 'react';
import { images } from '../../utils/images';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  /* FIXED: Pure white background as requested */
  background: ${({ theme }) => theme.colors.background.white}; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the H2 title relative to the container */
`;

const AboutContent = styled.div`
  display: flex;
  /* FIXED: align-items center ensures text and image are perfectly leveled horizontally */
  align-items: center; 
  justify-content: center;
  gap: clamp(2rem, 8vw, 5rem);
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutImageContainer = styled.div`
  flex: 0 0 400px; 
  max-width: 100%;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateX(${props => props.$visible ? '0' : '-50px'});
  transition: all 0.8s ease-out;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  /* Added a subtle shadow so the white card pops against the white bg */
  box-shadow: ${({ theme }) => theme.shadows.lg}; 

  &::before {
    content: '';
    display: block;
    padding-top: 120%; 
  }

  @media (max-width: 968px) {
    flex: 0 0 auto;
    width: 280px;
    margin-bottom: 2rem;
  }
`;

const StyledAboutImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutText = styled.div`
  flex: 1;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateX(${props => props.$visible ? '0' : '50px'});
  transition: all 0.8s ease-out;
  /* FIXED: Dark text for high visibility on white background */
  color: ${({ theme }) => theme.colors.text.dark}; 
`;

const SkillTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const About = () => {
  const { ref: contentRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    "Machine Learning", "Data Storytelling", "Critical Thinking", 
    "Problem Solving", "Data Mining", "SQL & Python"
  ];

  return (
    <AboutSection id="about">
      <Container>
        {/* FIXED: Title color set to dark grey/black for visibility */}
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(2.3rem, 5vw, 3rem)', 
          marginBottom: '4rem',
          color: '#333333',
          fontWeight: '700'
        }}>
          About <span style={{ color: '#4338CA' }}>Me</span>
        </h2>
        
        <AboutContent ref={contentRef}>
          <AboutImageContainer $visible={inView}>
            <StyledAboutImage
              src={images.about}
              alt="Ayoub Taouabi - Data Scientist Portfolio"
            />
          </AboutImageContainer>

          <AboutText $visible={inView}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1.5rem', 
              color: '#2D3748' 
            }}>
              Turning Data into Decisions
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              marginBottom: '2rem', 
              color: '#4A5568' /* Softer grey for body text readability */
            }}>
              I am a Data Scientist focused on bridging the gap between complex 
              technical analysis and strategic business value[cite: 36]. Currently pursuing 
              my MSc in AI, I specialize in building predictive models that 
              don't just work, but tell a story.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.8rem', 
              justifyContent: 'flex-start' 
            }}>
              {skills.map((skill, index) => (
                <SkillTag key={index}>
                  <FontAwesomeIcon icon={faStar} size="xs" />
                  {skill}
                </SkillTag>
              ))}
            </div>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;