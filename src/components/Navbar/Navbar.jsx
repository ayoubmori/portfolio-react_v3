import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// CORRECTED: Using $scrolled prop
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $scrolled, theme }) => $scrolled ? theme.colors.background.white : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) => $scrolled ? theme.shadows.md : 'none'};
  transition: ${({ theme }) => theme.transitions.default};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// CORRECTED: Using $scrolled prop
const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.secondary : theme.colors.text.primary};
  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// CORRECTED: Using $isOpen prop
const NavMenu = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background.white};
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
`;

const NavItem = styled.li``;

// CORRECTED: Using $scrolled prop
const NavLink = styled(Link)`
  color: ${props => props.$scrolled ? '#333' : '#fff'};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #4338CA;
  }

  &.active {
    color: #4338CA;
  }

  @media (max-width: 768px) {
    color: #333;
    display: block;
    padding: 0.5rem 0;
  }
`;

// CORRECTED: Using $scrolled prop
const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.$scrolled ? '#333' : '#fff'};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo to="home" smooth={true} duration={500} $scrolled={scrolled} onClick={closeMenu}>
          Ayoub Taouabi
        </Logo>
        <MenuButton onClick={toggleMenu} $scrolled={scrolled}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MenuButton>
        <NavMenu $isOpen={isOpen}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <NavItem key={item}>
              <NavLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                $scrolled={scrolled} // CORRECTED: pass state variable 'scrolled' to prop '$scrolled'
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;