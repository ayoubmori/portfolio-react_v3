import React from 'react';
import styled, { keyframes } from 'styled-components';
import LazyImage from './LazyImage';

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
`;

const Container = styled.div`
  position: relative;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const CircleAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  border: 2px dashed ${({ theme }) => theme.colors.primary || '#4338CA'};
  border-radius: 50%;
  animation: ${rotate} 20s linear infinite;
`;

const PulseCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  border: 3px solid ${({ theme }) => theme.colors.primary || '#4338CA'};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
  opacity: 0.7;
`;

const StyledImage = styled(LazyImage)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ProfilePicture = ({
  src,
  alt,
  fallback,
  size,
  ...props
}) => {
  return (
    <Container size={size}>
      <CircleAnimation />
      <PulseCircle />
      <ImageWrapper>
        <StyledImage
          src={src}
          alt={alt}
          fallback={fallback}
          objectFit="cover"
          {...props}
        />
      </ImageWrapper>
    </Container>
  );
};

export default ProfilePicture;
