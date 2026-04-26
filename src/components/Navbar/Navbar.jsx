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
  z-index: ${({ theme }) => theme.zIndex.navbar};
  background: ${({ $scrolled, theme }) => $scrolled ? theme.colors.background.white : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) => $scrolled ? theme.shadows.md : 'none'};
  transition: ${({ theme }) => theme.transitions.default};
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
  /* Logic: Use dark text when scrolled or primary text on transparent background */
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.dark : theme.colors.text.primary};
  cursor: pointer;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.dark : theme.colors.text.primary};
  font-size: 1.5rem;
  z-index: ${({ theme }) => theme.zIndex.mobileMenu};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background.dark};
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    /* Fix: Allow scrolling if menu is taller than screen (landscape mode) */
    overflow-y: auto;
    padding: 2rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.text.dark : theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: white; /* Always white on mobile background */
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo to="home" smooth={true} $scrolled={scrolled} onClick={closeMenu}>
          Ayoub Taouabi
        </Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)} $scrolled={scrolled} aria-label="Toggle Menu">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MenuButton>
        <NavMenu $isOpen={isOpen}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <NavLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                $scrolled={scrolled}
                onClick={closeMenu}
                activeClass="active"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;