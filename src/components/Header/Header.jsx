import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  color: #fff; 
  padding: 15px 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Change to column layout on smaller screens */
    text-align: center; /* Center-align content */
  }
`;

const Logo = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  color: #fff; 
`;

const NavLinks = styled.nav`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 20px; /* Add margin to separate links on smaller screens */
  }
`;

const NavLink = styled(Link)`
  color: inherit; 
  text-decoration: none;
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
    transform: translateY(-5px); 
    background-color: white; 
  }

  @media screen and (max-width: 768px) {
    margin-left: 0; /* Remove left margin on smaller screens */
    margin-bottom: 10px; /* Add bottom margin to separate links */
    display: block; /* Change to block element for stacking links */
  }
`;


const HeaderComponent = () => {
  return (
    <Header>
      <Logo >RISHI PANDEY</Logo> 
      <NavLinks>
        <NavLink to="/">Home</NavLink>


        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>

      </NavLinks>
    </Header>
  );
};

export default HeaderComponent;
