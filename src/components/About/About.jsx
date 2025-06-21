import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import LazyImage from '../shared/LazyImage';
import Tooltip from '../shared/Tooltip';
import { images, profileFallback } from '../../utils/images';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #f8f9fa;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

const AboutImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  width: 100%;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateX(${props => props.visible ? '0' : '-50px'});
  transition: all 0.6s ease-out;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &::before {
    content: '';
    display: block;
    padding-top: 133.33%; /* This creates the 3:4 aspect ratio */
  }

  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const StyledAboutImage = styled(LazyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const AboutText = styled.div`
  flex: 1;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateX(${props => props.visible ? '0' : '50px'});
  transition: all 0.6s ease-out;
  padding: ${({ theme }) => theme.spacing[4]};
`;

const AboutParagraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #4a5568;
`;

const SkillsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]};

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const SkillTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: all 0.2s ease;
  cursor: help;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  svg {
    font-size: 0.8em;
  }
`;

const About = () => {
  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [textRef, textInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    {
      name: 'Python',
      tooltip: 'Expert in Python for data science & ML - 3 years experience'
    },
    {
      name: 'SQL',
      tooltip: 'Advanced database querying with PostgreSQL & MySQL - 2 years experience'
    },
    {
      name: 'Streamlit',
      tooltip: 'Building interactive data science web apps - 10+ projects completed'
    },
    {
      name: 'Data Manipulation',
      tooltip: 'Expert: Pandas & NumPy for data preprocessing, cleaning & analysis'
    },
    {
      name: 'Data Visualization',
      tooltip: 'Advanced: Matplotlib, Seaborn, Power BI & Plotly for data storytelling'
    },
    {
      name: 'Web Scraping',
      tooltip: 'Proficient: Beautiful Soup & Selenium for automated data collection'
    },
    {
      name: 'API Development',
      tooltip: 'Experienced with Flask & FastAPI for building robust data services'
    },
    {
      name: 'ML Modeling',
      tooltip: 'Skilled in scikit-learn, Keras & TensorFlow for predictive modeling'
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutImageContainer ref={imageRef} visible={imageInView}>
            <StyledAboutImage
              src={images.profile}
              alt="Ayoub Taouabi"
              fallback={profileFallback}
              objectFit="cover"
            />
          </AboutImageContainer>
          <AboutText ref={textRef} visible={textInView}>
            <AboutParagraph>
              I'm Ayoub Taouabi, a data analyst pursuing an MSc in Data Analytics & AI.
              I turn complex data into meaningful insights that solve real-world problems.
              Driven by curiosity, I blend analysis with storytelling to support smart decisions.
            </AboutParagraph>
            <AboutParagraph>
              Skilled in Python, SQL, Power BI, and Tableau for data analysis and visualization.
              Experienced in data cleaning, preprocessing, and statistical modeling.
              Comfortable with Jupyter, FastAPI, and PostgreSQL in analytical workflows.
            </AboutParagraph>
            <SkillsContainer>
              <h3>Technical Skills</h3>
              <SkillTags>
                {skills.map((skill, index) => (
                  <Tooltip
                    key={index}
                    content={skill.tooltip}
                    defaultPosition={index % 2 === 0 ? 'top' : 'bottom'}
                  >
                    <SkillTag>
                      <FontAwesomeIcon icon={faCode} />
                      {skill.name}
                    </SkillTag>
                  </Tooltip>
                ))}
              </SkillTags>
            </SkillsContainer>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
