import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'; // Example icons

const FooterContainer = styled.footer`
  margin-top: 150px;
  
  background-color: #212121; /* Dark background color */
  color: #fff; /* Light text color */
  padding: 30px 0;
`;

const SocialMediaLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const SocialMediaLinkItem = styled.li`
  display: inline-block;
  margin: 0 10px;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  font-size: 18px; /* Smaller text size */
  font-family: 'Open Sans', sans-serif; /* Change font family */
  text-decoration: none;
  position: relative; /* Enable positioning for the hover effect */
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
    transform: translateY(-5px); /* Lift the card on hover */
    background-color: white; /* Change background color on hover */
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); /* Semi-transparent overlay */
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease-in-out;
  }
`;

const Copyright = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <SocialMediaLinkItem>
          <SocialMediaLink href="https://www.linkedin.com/in/rishi-pandey-3721aa252" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
            <span>LinkedIn</span>
          </SocialMediaLink>
        </SocialMediaLinkItem>
        <SocialMediaLinkItem>
          <SocialMediaLink href="https://github.com/Rishipandey1722" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
            <span>GitHub</span>
          </SocialMediaLink>
        </SocialMediaLinkItem>
        <SocialMediaLinkItem>
          <SocialMediaLink href="https://leetcode.com/pandeyrishi/" target="_blank" rel="noopener noreferrer">
            {/* Add custom LeetCode icon here */}
            LeetCode
          </SocialMediaLink>
        </SocialMediaLinkItem>
      </SocialMediaLinks>
      <Copyright>© {new Date().getFullYear()} Rishi Pandey. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
