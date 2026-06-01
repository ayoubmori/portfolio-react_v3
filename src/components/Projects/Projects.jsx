import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import LazyImage from '../shared/LazyImage';
import ProjectModal from './ProjectModal';
import { projectsData } from '../../data/projects';
import { fallbackImage } from '../../utils/images';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.text.dark};
  font-weight: 700;
  letterSpacing: -1px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled.div`
  /* DYNAMIC BACKGROUND BASED ON TIER */
  background: ${({ $tier, theme }) => {
    if ($tier === 'top') return `linear-gradient(145deg, #cbdfe7 0%, #cbdfe7 100%)`;
    if ($tier === 'student') return 'linear-gradient(145deg, #fdf7ff 0%, #fdf7ff 100%)';
    return 'linear-gradient(145deg, #ece2d7 0%, #ece2d7 100%)'; // Default for 'second'
  }};
  
  /* ADD A SUBTLE BORDER TO TOP TIER CARDS */
  border: ${({ $tier, theme }) => 
    $tier === 'top' ? `1px solid ${theme.colors.primary}30` : '1px solid transparent'
  };

  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '20px'});
  transition-delay: ${props => props.$delay}ms;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    /* Make the top tier glow a bit more on hover */
    border-color: ${({ $tier, theme }) => 
      $tier === 'top' ? `${theme.colors.primary}60` : 'transparent'
    };
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    color: ${({ theme }) => theme.colors.text.dark};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.9rem;
    flex: 1;
  }
`;

const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const IconLink = styled.a`
  color: ${props => props.$primary ? props.theme.colors.primary : props.theme.colors.text.dark};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  /* Using your primary color with a low opacity for a modern 'pill' look */
  background: ${({ theme }) => theme.colors.primary}15; 
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  letter-spacing: 0.5px;
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        
        <ProjectsGrid ref={ref}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} $visible={inView} $delay={index * 100} $tier={project.tier}>
              <LazyImage
                src={project.image}
                alt={project.title}
                height="200px"
                fallback={fallbackImage(project.title)}
              />
              <ProjectInfo>
                <h3>{project.title}</h3>
                
                {/* NEW TAGS SECTION */}
                {project.tags && (
                  <TagsContainer>
                    {project.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                )}

                <p>{project.description}</p>
                
                <SeeMoreButton onClick={() => handleOpenModal(project)}>
                  <FontAwesomeIcon icon={faInfoCircle} /> Details
                </SeeMoreButton>

                <LinksContainer>
                  {project.github && (
                    <IconLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </IconLink>
                  )}
                  {project.demo && (
                    <IconLink href={project.demo} target="_blank" rel="noopener noreferrer" $primary>
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                    </IconLink>
                  )}
                </LinksContainer>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </ProjectsSection>
  );
};

export default Projects;