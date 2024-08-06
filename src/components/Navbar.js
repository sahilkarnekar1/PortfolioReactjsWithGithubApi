import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: #9400d3;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
    background-color: #9400d3;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 20px 0;
  }
`;

const NavLink = styled.li`
  margin-left: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ff9800;
    }
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Logo to="/">Sahil Logo</Logo>
      <MobileMenuButton onClick={handleMenuToggle}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </MobileMenuButton>
      <NavLinks open={isOpen}>
        <NavLink>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </NavLink>
      </NavLinks>
    </Wrapper>
  );
};

export default Navbar;
