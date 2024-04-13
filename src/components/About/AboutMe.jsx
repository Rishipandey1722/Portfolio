import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  background-color: #1f1f1f; /* Default background color */
  color: white; /* Default text color */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
  margin: 20px auto;
  max-width: 800px; /* Limit width for better readability */
  transition: all 0.3s ease-in-out;
`;

const AboutMeText = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Maintains spacing */
  margin-top: 30px;
`;

const InfoCard = styled.div`
  background-color: #292927; /* White background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
  flex: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoDetail = styled.p`
  font-size: 16px;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2 style={{ textAlign: "center" }}>About me</h2>
      <AboutMeText>
        I'm a Computer Science & Engineering Undergradute at the United
        Institute of Technology. I'm an enthusiastic and driven Software
        Engineering student seeking a challenging internship opportunity to
        apply and expand my technical skills. With a strong academic foundation
        in software engineering and hands-on experience in various programming
        languages, I am eager to contribute to innovative projects and learn
        from experienced professionals in the industry. I'm learning SpringBoot
        as a backend and React as a frontend.
      </AboutMeText>
      <InfoContainer>
        <InfoCard>
          <InfoTitle>Degree Information</InfoTitle>
          <InfoDetail>Bachelor of Computer Science & Engineering</InfoDetail>
          <InfoDetail>
            United Institute Of Technology affiliated to Aktu University
          </InfoDetail>
          <InfoDetail>Graduation Year: 2020 - 2024</InfoDetail>
        </InfoCard>
        <InfoCard>
          <InfoTitle>Current Percentage</InfoTitle>
          <InfoDetail>Overall Percentage: 76.2%</InfoDetail>
        </InfoCard>
      </InfoContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
