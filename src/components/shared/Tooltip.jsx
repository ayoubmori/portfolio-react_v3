import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  position: absolute;
  ${({ $position }) => {
    switch ($position) {
      case 'top':
        return 'bottom: 100%; left: 50%; transform: translateX(-50%);';
      case 'bottom':
        return 'top: 100%; left: 50%; transform: translateX(-50%);';
      case 'left':
        return 'right: 100%; top: 50%; transform: translateY(-50%);';
      case 'right':
        return 'left: 100%; top: 50%; transform: translateY(-50%);';
      default:
        return 'bottom: 100%; left: 50%; transform: translateX(-50%);';
    }
  }}
  margin: ${({ $position }) => 
    $position === 'top' || $position === 'bottom' ? '10px 0' : '0 10px'};
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.text.primary};
  color: white;
  font-size: 0.875rem;
  border-radius: 6px;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  animation: ${fadeIn} 0.2s ease-out;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    ${({ $position }) => {
      switch ($position) {
        case 'top':
          return `
            border-top-color: ${({ theme }) => theme.colors.text.primary};
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
          `;
        case 'bottom':
          return `
            border-bottom-color: ${({ theme }) => theme.colors.text.primary};
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
          `;
        case 'left':
          return `
            border-left-color: ${({ theme }) => theme.colors.text.primary};
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          `;
        case 'right':
          return `
            border-right-color: ${({ theme }) => theme.colors.text.primary};
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
          `;
        default:
          return `
            border-top-color: ${({ theme }) => theme.colors.text.primary};
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
          `;
      }
    }}
  }
`;

const Tooltip = ({ content, children, defaultPosition = 'top' }) => {
  const [position, setPosition] = useState(defaultPosition);
  const [show, setShow] = useState(false);
  const tooltipRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const calculatePosition = () => {
      if (!tooltipRef.current || !wrapperRef.current) return;

      const tooltip = tooltipRef.current.getBoundingClientRect();
      const wrapper = wrapperRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Check if tooltip would overflow viewport
      if (defaultPosition === 'top' && wrapper.top < tooltip.height + 20) {
        setPosition('bottom');
      } else if (defaultPosition === 'bottom' && wrapper.bottom + tooltip.height + 20 > viewportHeight) {
        setPosition('top');
      } else if (defaultPosition === 'left' && wrapper.left < tooltip.width + 20) {
        setPosition('right');
      } else if (defaultPosition === 'right' && wrapper.right + tooltip.width + 20 > viewportWidth) {
        setPosition('left');
      } else {
        setPosition(defaultPosition);
      }
    };

    if (show) {
      calculatePosition();
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);
    }

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [show, defaultPosition]);

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <TooltipContent
          ref={tooltipRef}
          position={position}
          role="tooltip"
        >
          {content}
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;