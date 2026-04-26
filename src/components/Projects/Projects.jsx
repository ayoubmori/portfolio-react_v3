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
  background: white;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled.div`
  background: white;
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
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '5rem', 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          color: '#333333',
          fontWeight: '700',
          letterSpacing: '-1px'
        }}>
          Projects
        </h2>
        <ProjectsGrid ref={ref}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} $visible={inView} $delay={index * 100}>
              <LazyImage
                src={project.image}
                alt={project.title}
                height="200px"
                fallback={fallbackImage(project.title)}
              />
              <ProjectInfo>
                <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', flex: 1 }}>{project.description}</p>
                
                <SeeMoreButton onClick={() => handleOpenModal(project)}>
                  <FontAwesomeIcon icon={faInfoCircle} /> Details
                </SeeMoreButton>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#4338CA' }}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                    </a>
                  )}
                </div>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </ProjectsSection>
  );
};

export default Projects;