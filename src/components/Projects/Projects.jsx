import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import LazyImage from '../shared/LazyImage';
import ProjectModal from './ProjectModal';
import { images, fallbackImage } from '../../utils/images';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: white;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3.5rem;
  color: #333;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #4338CA;
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  align-items: stretch;
  padding: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 500px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: all 0.6s ease-out;
  transition-delay: ${props => props.delay}ms;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const ProjectThumbnail = styled(LazyImage)`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #edf2f7;
  transition: transform 0.3s ease;
  object-fit: cover;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  line-height: 1.6;
  position: relative;
  
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
  padding-top: 0.5rem;
`;

const Tag = styled.span`
  background: #E0E7FF;
  color: #4338CA;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #C7D2FE;
    transform: scale(1.05);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #edf2f7;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  height: 2.75rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  flex: 1;
  text-align: center;
  white-space: nowrap;

  &.outline {
    border: 2px solid #4338CA;
    color: #4338CA;
    background: transparent;

    &:hover {
      background: #4338CA;
      color: white;
      transform: translateY(-2px);
    }
  }

  &.primary {
    background: #4338CA;
    color: white;
    border: 2px solid #4338CA;

    &:hover {
      background: #3730A3;
      border-color: #3730A3;
      transform: translateY(-2px);
    }
  }

  svg {
    font-size: 1.1rem;
  }
`;

const SeeMoreLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing[2]};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateX(4px);
  }

  svg {
    font-size: 0.8em;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding-left: ${({ theme }) => theme.spacing[6]};
  margin: ${({ theme }) => theme.spacing[4]} 0;

  li {
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.secondary};

    &::before {
      content: '';
      position: absolute;
      left: -${({ theme }) => theme.spacing[4]};
      top: 0.7em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = [
    {
      title: 'MyScore App',
      description: 'A web application for tracking and visualizing academic scores and progress. Built with a focus on user-friendly data input and insightful analytics.',
      fullDescription: 'MyScore App is a comprehensive academic performance tracking system that helps students visualize and analyze their academic journey.',
      image: images.projects.myScore,
      tags: ['Python','Streamlit','HTML', 'CSS', 'Chart.js'],
      // features: [
      //   'Interactive score input with real-time validation',
      //   'Visual progress tracking with dynamic charts',
      //   'Performance trend analysis by subject',
      //   'Custom grading scale configuration',
      //   'Export reports in multiple formats'
      // ],
      github: '#',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7209570700792115200/',
      techStack: {
        frontend: {
          mainTag: 'Frontend Development',
          description: 'Modern, responsive interface with interactive visualizations',
          subTags: ['Python','Streamlit','HTML5', 'CSS3', 'JavaScript ES6+', 'Chart.js']
        },
        features: {
          mainTag: 'Core Features',
          description: 'Comprehensive score tracking and analysis',
          subTags: ['Score Analytics', 'Progress Tracking', 'Performance Metrics']
        }
      },
      challenges: [
        'Implementing complex data visualization while maintaining optimal performance',
        'Creating an intuitive UX for data input and manipulation',
        'Ensuring accurate statistical calculations for trend analysis'
      ]
    },
    {
      title: 'Movie Recommendation App',
      description: 'An innovative mobile-first platform for discovering movies. Leverages external APIs for real-time data and user ratings.',
      image: images.projects.movieApp,
      tags: ['Python',"Streamlit" ,'API Integration'],
      github: 'https://github.com/ayoubmori/Movies-App'
    },
    {
      title: 'Breast Cancer Detection Model',
      description: 'A machine learning model to predict breast cancer occurrence based on diagnostic data. Includes data preprocessing and model evaluation.',
      image: images.projects.breastCancer,
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
      github: 'https://github.com/ayoubmori/Ml-Project-Analyse-Breast-Cancer-Data',
      demo: 'https://ml-analyze-breast-cancer-data.streamlit.app/'
    },
    {
      title: 'Coffee Shop Sales Dashboard',
      description: 'An interactive dashboard visualizing coffee shop sales data to identify trends and best-selling products. Built using Power BI.',
      image: images.projects.coffeeShop,
      tags: ['Power BI', 'Data Visualization', 'Business Intelligence'],
      github: 'https://github.com/ayoubmori/coffee-shop-site',
      // demo: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'A clean interface to display current weather and forecasts using a third-party weather API. Focus on clear presentation of data.',
      image: images.projects.weatherForecast,
      tags: ['JavaScript', 'API', 'HTML', 'CSS'],
      github: 'https://github.com/ayoubmori/weather-app',
      // demo: '#'
    },
    {
      title: 'Weather Prediction Model',
      description: 'A time-series analysis and forecasting model for predicting weather patterns using historical data. Explores various statistical models.',
      image: images.projects.weatherPrediction,
      tags: ['Python', 'Time Series', 'StatsModels', 'Pandas'],
      github: 'https://github.com/ayoubmori/predect-weather---mini-projet'
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <ProjectsGrid ref={ref}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              visible={inView}
              delay={index * 100}
            >
              <ProjectThumbnail
                src={project.image}
                alt={`${project.title} Thumbnail`}
                fallback={fallbackImage(`Project ${index + 1}`)}
                height="200px"
                objectFit="cover"
              />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  <p>{project.description}</p>
                  <SeeMoreLink
                    onClick={() => handleOpenModal(project)}
                    aria-label={`Learn more about ${project.title}`}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    See More...
                  </SeeMoreLink>
                </ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
                {project.features && (
                  <FeaturesList>
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </FeaturesList>
                )}
                <ProjectLinks>
                  {project.github && (
                    <LinkButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline"
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </LinkButton>
                  )}
                  {(project.demo || project.analysis) && (
                    <LinkButton
                      href={project.demo || project.analysis}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      {project.demo ? 'Live Demo' : 'View Analysis'}
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </ProjectsSection>
  );
};

export default Projects;
