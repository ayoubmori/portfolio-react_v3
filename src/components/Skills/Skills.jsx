import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faGithub,
  faGit,
  faLinux,
  faBootstrap,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faChartLine, 
  faCode,
  faBrain,
  faTable,
  faRobot,
  faSpider,
  faTerminal,
  faFileExcel,
  faServer,
  faGears,
} from '@fortawesome/free-solid-svg-icons';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[4]};
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url('/images/background.jpg') center/cover no-repeat fixed;
  color: white;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: white;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #888;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

const CategoryTitle = styled.h3`
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;
  display: inline-block;
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  letter-spacing: 0.5px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '20px'});
  transition: all 0.6s ease-out;
  margin-top: ${({ theme }) => theme.spacing[8]};
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  flex-wrap: wrap;
`;

const CategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  height: 100%;
  min-width: 320px;
  max-width: 380px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  /* For Data Visualization - 3 cards in a row */
  .visualization-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Special handling for grids with only 2 items */
  &:has(> *:nth-child(2):last-child) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[4]};
    width: 66%;
  }
`;

const SkillCard = styled.div`
  background: rgba(26, 26, 26, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[3]};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;
  justify-content: center;  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
              0 0 20px rgba(138, 43, 226, 0.25),
              0 0 30px rgba(138, 43, 226, 0.15);
  width: 104px;
  height: 104px;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    background: rgba(42, 42, 42, 0.9);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2),
                0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  font-size: 1.75rem;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;

  ${SkillCard}:hover & {
    transform: scale(1.1);
    color: ${({ theme }) => `${theme.colors.primary}`};
  }
`;

const SkillName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.95);
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-weight: 300;
  letter-spacing: 0.3px;
  opacity: 0.85;
  transition: all 0.3s ease-in-out;
  line-height: 1.3;

  ${SkillCard}:hover & {
    opacity: 1;
    font-weight: 400;
  }
`;

const skillsData = {
  programmingScripting: [
    { name: 'Python', icon: faPython },
    { name: 'SQL', icon: faDatabase },
    { name: 'Linux Bash', icon: faTerminal },
  ],
  webDevelopment: [
    { name: 'Flask', icon: faServer },
    { name: 'FastAPI', icon: faCode },
    { name: 'Streamlit', icon: faChartLine },
  ],
  dataManipulation: [
    { name: 'Pandas', icon: faTable },
    { name: 'NumPy', icon: faCode },
    { name: 'Excel', icon: faFileExcel },
  ],
  dataVisualization: [
    { name: 'Seaborn', icon: faChartLine },
    { name: 'Plotly', icon: faChartLine },
    { name: 'Power BI', icon: faChartLine },
  ],  machineLearning: [
    { name: 'sklearn', icon: faBrain },
    { name: 'TensorFlow', icon: faBrain },
    { name: 'Keras', icon: faRobot },
  ],
  webScrapingAutomation: [
    { name: 'bs4', icon: faSpider },
    { name: 'Selenium', icon: faRobot },
  ],
  toolsPlatforms: [
    { name: 'Git', icon: faGit },
    { name: 'GitHub', icon: faGithub },
  ],
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>My <span>Skills</span></Title>
        <Subtitle>Technologies I've been working with</Subtitle>        <SkillsContainer ref={ref} $visible={inView}>
          {/* Row 1: Programming & Web Development */}
          <SkillsRow>
            <CategoryGroup>
              <CategoryTitle>Programming & Scripting</CategoryTitle>
              <SkillsGrid>
                {skillsData.programmingScripting.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>
            
            <CategoryGroup>
              <CategoryTitle>Web Development & APIs</CategoryTitle>
              <SkillsGrid>
                {skillsData.webDevelopment.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>
          </SkillsRow>

          {/* Row 2: Data & ML */}
          <SkillsRow>
            <CategoryGroup>
              <CategoryTitle>Data Manipulation</CategoryTitle>
              <SkillsGrid>
                {skillsData.dataManipulation.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>

            <CategoryGroup>
              <CategoryTitle>Data Visualization</CategoryTitle>
              <SkillsGrid>
                {skillsData.dataVisualization.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>

            <CategoryGroup>
              <CategoryTitle>Machine Learning</CategoryTitle>
              <SkillsGrid>
                {skillsData.machineLearning.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>
          </SkillsRow>

          {/* Row 3: Tools & Web Scraping */}
          <SkillsRow>
            <CategoryGroup>
              <CategoryTitle>Scraping & Automation</CategoryTitle>
              <SkillsGrid>
                {skillsData.webScrapingAutomation.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>

            <CategoryGroup>
              <CategoryTitle>Tools & Platforms</CategoryTitle>
              <SkillsGrid>
                {skillsData.toolsPlatforms.map((skill, index) => (
                  <SkillCard key={index}>
                    <IconWrapper>
                      <FontAwesomeIcon icon={skill.icon} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </CategoryGroup>
          </SkillsRow>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
