import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from '../shared/Modal.jsx';
import LazyImage from '../shared/LazyImage.jsx';

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1.5rem;
`;

const ImageGallery = styled.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
`;

const Description = styled.div`
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  font-size: 1.1rem;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const Section = styled.div`
  margin: 2rem 0;

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 1.25rem;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
    }
  }
`;

const TechCategory = styled.div`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  h4 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      display: inline-block;
      width: 3px;
      height: 1rem;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      background: rgba(67, 56, 202, 0.1);
      color: ${({ theme }) => theme.colors.primary};
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 500;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Challenges = styled.ul`
  list-style-position: inside;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.text.secondary};

  li {
    margin-bottom: 0.75rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 160px;

  &.primary {
    background: ${({ theme }) => theme.colors.primary};
    color: white;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  &.secondary {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>{project.title}</ModalTitle>
      
      <ImageGallery>
        <LazyImage
          src={project.image}
          alt={project.title}
          height="400px"
          objectFit="cover"
        />
      </ImageGallery>

      <Description>{project.fullDescription || project.description}</Description>

      {project.techStack && (
        <Section>
          <h3>Technical Stack & Implementation</h3>
          <TechStackGrid>
            {Object.entries(project.techStack).map(([category, data]) => (
              <TechCategory key={category}>
                <h4>{data.mainTag}</h4>
                <p>{data.description}</p>
                <ul>
                  {data.subTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </TechCategory>
            ))}
          </TechStackGrid>
        </Section>
      )}

      {project.features && (
        <Section>
          <h3>Key Features</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.challenges && (
        <Section>
          <h3>Challenges & Solutions</h3>
          <Challenges>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </Challenges>
        </Section>
      )}

      <Links>
        {project.github && (
          <LinkButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            <FontAwesomeIcon icon={faGithub} /> View on GitHub
          </LinkButton>
        )}
        {project.demo && (
          <LinkButton
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="primary"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
          </LinkButton>
        )}
      </Links>
    </Modal>
  );
};

export default ProjectModal;
