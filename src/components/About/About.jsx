import React from 'react';
import { images } from '../../utils/images';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
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
  align-items: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2.3rem, 5vw, 3rem);
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text.dark};
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: stretch; /* CHANGED: This forces equal heights */
  justify-content: center;
  gap: clamp(2rem, 8vw, 5rem);
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutImageContainer = styled.div`
  /* --- WIDTH CONTROL --- */
  flex: 0 0 500px; /* Change '380px' to make the image wider or thinner */
  
  /* --- HEIGHT CONTROL --- */
  /* By using 'display: flex' and 'align-items: stretch' in the parent, 
     this container will now automatically stretch to match the text height! */
  display: flex; 
  
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateX(${props => props.$visible ? '0' : '-50px'});
  transition: all 0.8s ease-out;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  /* REMOVED the position: sticky and &::before padding hack */

  @media (max-width: 968px) {
    flex: 0 0 500px; /* On mobile, this controls the fixed height of the image */
    width: 100%;
    max-width: 380px; /* Mobile width constraint */
    margin-bottom: 2rem;
  }
`;

const StyledAboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Keeps the image from warping when it stretches */
`;

const AboutText = styled.div`
  flex: 1;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateX(${props => props.$visible ? '0' : '50px'});
  transition: all 0.8s ease-out;
  color: ${({ theme }) => theme.colors.text.dark}; 
`;

const SectionSubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.dark};
`;

const BodyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ValueSection = styled.div`
  margin-bottom: 2.5rem;
  background: ${({ theme }) => theme.colors.background.light};
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const ValueTitle = styled.h4`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.dark};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ValueList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr; /* Creates a nice 2-column grid on larger screens */
  }
`;

const ValueItem = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.5;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 0.25rem; /* Aligns the icon with the first line of text */
    flex-shrink: 0;
  }
`;


const About = () => {
  const { ref: contentRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const whatIBuild = [
    "Data dashboards and reporting systems",
    "AI-powered applications and automation tools",
    "FastAPI backends and APIs",
    "Business intelligence solutions",
    "Web platforms and internal tools",
    "Data collection and web scraping pipelines"
  ];

  const currentInterests = [
    "AI-powered business tools",
    "Analytics and reporting systems",
    "Workflow automation",
    "Data products",
    "Software for education and workforce development"
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>
          About <span>Me</span>
        </SectionTitle>
        
        <AboutContent ref={contentRef}>
          <AboutImageContainer $visible={inView}>
            <StyledAboutImage
              src={images.about}
              alt="Ayoub Taouabi - Data Scientist Portfolio"
            />
          </AboutImageContainer>

          <AboutText $visible={inView}>
            <SectionSubtitle>
              Turning Data into Decisions
            </SectionSubtitle>
            
            <BodyText>
              I am a Data Scientist focused on bridging the gap between complex 
              technical analysis and strategic business value. Currently pursuing 
              my MSc in AI, I specialize in building predictive models that 
              don't just work, but tell a story.
            </BodyText>

            {/* WHAT I BUILD SECTION */}
            <ValueSection>
              <ValueTitle>What I Build</ValueTitle>
              <ValueList>
                {whatIBuild.map((item, index) => (
                  <ValueItem key={index}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {item}
                  </ValueItem>
                ))}
              </ValueList>
            </ValueSection>

            {/* CURRENT INTERESTS SECTION */}
            <ValueSection>
              <ValueTitle>Current Interests</ValueTitle>
              <ValueList>
                {currentInterests.map((item, index) => (
                  <ValueItem key={index}>
                    <FontAwesomeIcon icon={faArrowRight} />
                    {item}
                  </ValueItem>
                ))}
              </ValueList>
            </ValueSection>

          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;