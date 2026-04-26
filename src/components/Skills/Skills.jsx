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
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

// CHANGED: Switched to Flexbox to automatically center the last row
const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  opacity: ${props => props.$visible ? 1 : 0}; 
  transform: translateY(${props => props.$visible ? '0' : '30px'});
  transition: all 0.8s ease-out;
`;

// CHANGED: Added flex sizing and max-width to maintain card proportions
const SkillCard = styled.div`
  flex: 1 1 320px; /* Allows cards to grow and shrink appropriately */
  max-width: 340px; /* Prevents cards from stretching too wide */
  width: 100%;
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
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '5rem', 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          color: 'white',
          fontWeight: '700',
          letterSpacing: '-1px'
        }}>
          Technical <span style={{ color: '#4338CA' }}>Skills</span>
        </h2>

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