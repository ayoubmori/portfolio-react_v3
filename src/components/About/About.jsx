import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import LazyImage from '../shared/LazyImage';
import { images, profileFallback } from '../../utils/images';

const AboutSection = styled.section`
  padding: 6rem 1rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateX(${props => props.visible ? '0' : '-50px'});
  transition: all 0.6s ease-out;
`;

const AboutImage = styled(LazyImage)`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  flex: 1;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateX(${props => props.visible ? '0' : '50px'});
  transition: all 0.6s ease-out;
`;

const AboutParagraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #4a5568;
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  background: #4338CA;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  i {
    font-size: 0.8rem;
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
    'Python',
    'SQL',
    'Data Analysis',
    'Data Visualization',
    'Machine Learning',
    'Power BI',
    'FastAPI'
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutImageContainer ref={imageRef} visible={imageInView}>            <AboutImage
              src={images.profile}
              alt="Ayoub Taouabi"
              fallback={profileFallback}
              width="100%"
              maxWidth="350px"
              height="420px"
              objectFit="cover"
              borderRadius="10px"
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
              <SkillTags>
                {skills.map((skill, index) => (
                  <SkillTag key={index}>
                    <FontAwesomeIcon icon={faCode} />
                    {skill}
                  </SkillTag>
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
