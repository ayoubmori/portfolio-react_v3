import React, { useState } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  background-color: #E0E7FF;
  border-radius: ${props => props.borderRadius || '0'};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  ${props => props.styles}
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #E0E7FF 0%,
    #F1F5FF 50%,
    #E0E7FF 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  opacity: ${props => props.isLoading ? 1 : 0};
  transition: opacity 0.3s ease-in-out;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const LazyImage = ({ 
  src, 
  alt, 
  fallback, 
  width, 
  height,
  objectFit,
  borderRadius,
  styles,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    if (fallback) {
      setLoaded(true);
    }
  };

  return (
    <ImageWrapper 
      width={width} 
      height={height}
      borderRadius={borderRadius}
    >
      <LoadingPlaceholder isLoading={!loaded} />
      <StyledImage
        src={error ? fallback : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        loaded={loaded}
        objectFit={objectFit}
        styles={styles}
        {...props}
      />
    </ImageWrapper>
  );
};

export default LazyImage;
