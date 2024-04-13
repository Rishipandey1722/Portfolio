import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';


const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 3vh; /* Fills viewport height */
  background-color: #1f1f1f; /* Light background */
  padding: 20px;
`;

const IntroTitle = styled.h1`
  font-size: 2em;
  justify-content: center;
  color: white; /* Dark text */
  text-align: center;
  transition: background-color 0.3s, color 0.3s, transform 0.3s; /* Smooth transition effect */
  cursor: pointer; /* Show pointer cursor on hover */
  &:hover,
  &:active {
    background-color: white; 
    color: black; /* Change text color on hover/active */
    transform: translateY(-5px); /* Lift the name upward */
  }
`;
const IntroText = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: white; /* Dark text */
  text-align: center;
`;

const AboutMe = styled.p`
  font-size: 1em;
  color: white; /* Light gray text */
  text-align: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const downloadResume = () => {
    // Replace '/path/to/your/resume.pdf' with the actual path to your resume PDF file
    const resumeUrl = 'https://drive.google.com/file/d/1h4T5nF25Xd1pZNmH27rM7MXCB8fHgpzf/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

const Introduction = ({ introText, aboutMe, socialLinks }) => {
  return (
    <IntroContainer>
        <IntroText>Hello, I'm </IntroText>
      <IntroTitle>Rishi Pandey</IntroTitle>
      
      <AboutMe>BTech (Computer Science & Engineering) UnderGraduate</AboutMe>
      <AboutMe><Button variant="outlined" color="error"  onClick={downloadResume}>Download Resume</Button>
</AboutMe>

    </IntroContainer>
  );
};

export default Introduction;
