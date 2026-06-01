import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsData } from '../../data/skills'; 

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)),
    url('/images/background.jpg') center/cover no-repeat fixed;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px; /* INCREASED from 1100px so 3 wider cards fit perfectly */
  margin: 0 auto;
  width: 100%;
`;

/* ADDED: Clean styled component to replace your inline h2 styles */
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: white;
  font-weight: 700;
  letter-spacing: -1px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// CHANGED: Switched to CSS Grid for strict column control
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* STRICTLY 3 EQUAL COLUMNS */
  gap: 2rem; /* Nice breathing room between cards */
  opacity: ${props => props.$visible ? 1 : 0}; 
  transform: translateY(${props => props.$visible ? '0' : '30px'});
  transition: all 0.8s ease-out;

  /* Makes it responsive! */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Drops to 2 columns on tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Drops to 1 column on mobile */
  }
`;

const SkillCard = styled.div`
  /* Removed the width/flex constraints because Grid handles sizing now */
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: ${({ theme }) => theme.colors.primary}66;
    box-shadow: 0 10px 30px -10px rgba(67, 56, 202, 0.3);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }
`;

const ToolsCaption = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SkillsSection id="skills">
      <Container>
        {/* CLEANED UP: Using the styled component instead of inline styles */}
        <SectionTitle>
          Technical <span>Skills</span>
        </SectionTitle>

        <SkillsGrid ref={ref} $visible={inView}>
          {skillsData.map((category) => (
            <SkillCard key={category.id}>
              <CardHeader>
                <FontAwesomeIcon icon={category.icon} />
                <h3>{category.label}</h3>
              </CardHeader>
              <ToolsCaption>
                {category.tools}
              </ToolsCaption>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;