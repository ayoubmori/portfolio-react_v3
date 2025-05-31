import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import LazyImage from '../shared/LazyImage';
import { images, fallbackImage } from '../../utils/images';

const ProjectsSection = styled.section`
  padding: 6rem 1rem;
  background: white;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: all 0.6s ease-out;
  transition-delay: ${props => props.delay}ms;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectThumbnail = styled(LazyImage)`
  border-bottom: 1px solid #edf2f7;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: #E0E7FF;
  color: #4338CA;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &.outline {
    border: 2px solid #4338CA;
    color: #4338CA;

    &:hover {
      background: #4338CA;
      color: white;
    }
  }

  &.primary {
    background: #4338CA;
    color: white;
    border: 2px solid #4338CA;

    &:hover {
      background: #3730A3;
      border-color: #3730A3;
    }
  }
`;

const Projects = () => {  const projectsData = [
    {
      title: 'MyScore App',
      description: 'A web application for tracking and visualizing academic scores and progress. Built with a focus on user-friendly data input and insightful analytics.',
      image: images.projects.myScore,
      tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Movie Recommendation App',
      description: 'An innovative mobile-first platform for discovering movies. Leverages external APIs for real-time data and user ratings.',
      image: images.projects.movieApp,
      tags: ['JavaScript', 'API Integration', 'Responsive Design'],
      github: '#'
    },
    {
      title: 'Breast Cancer Detection Model',
      description: 'A machine learning model to predict breast cancer occurrence based on diagnostic data. Includes data preprocessing and model evaluation.',
      image: images.projects.breastCancer,
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
      github: '#',
      analysis: '#'
    },
    {
      title: 'Coffee Shop Sales Dashboard',
      description: 'An interactive dashboard visualizing coffee shop sales data to identify trends and best-selling products. Built using Power BI.',
      image: images.projects.coffeeShop,
      tags: ['Power BI', 'Data Visualization', 'Business Intelligence'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'A clean interface to display current weather and forecasts using a third-party weather API. Focus on clear presentation of data.',
      image: images.projects.weatherForecast,
      tags: ['JavaScript', 'API', 'HTML', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Prediction Model',
      description: 'A time-series analysis and forecasting model for predicting weather patterns using historical data. Explores various statistical models.',
      image: images.projects.weatherPrediction,
      tags: ['Python', 'Time Series', 'StatsModels', 'Pandas'],
      github: '#'
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
            >              <ProjectThumbnail
                src={project.image}
                alt={`${project.title} Thumbnail`}
                fallback={fallbackImage(`Project ${index + 1}`)}
                height="200px"
                objectFit="cover"
              />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
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
    </ProjectsSection>
  );
};

export default Projects;
