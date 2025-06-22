import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $scrolled, theme }) => $scrolled ? theme.colors.background.white : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) => $scrolled ? theme.shadows.md : 'none'};
  transition: all 0.3s ease-in-out;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.dark : theme.colors.text.primary};
  cursor: pointer;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.dark : theme.colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background.dark};
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.dark : theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
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
                $scrolled={scrolled}
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