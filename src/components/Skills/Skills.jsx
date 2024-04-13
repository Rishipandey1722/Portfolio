import React from 'react';
import styled from 'styled-components';

const skills = [
  // Replace with your skills (name, progress)
  { name: "Java", progress: 70 },
  { name: "Spring Boot", progress: 55 },
  { name: "Python", progress: 65 },
  { name: "HTML & CSS", progress: 60 },
  { name: "React", progress: 55 },
  { name: "Computer Science Fundamentals", progress: 70 },
];

const SkillsSection = styled.section`
  padding: 50px 0;
  color: #fff; /* Light text color */
`;

const SkillCard = styled.div`
  background-color: #1a1a1a; /* Darker card background for contrast */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: center; /* Center content within card */
  cursor: pointer; /* Add hover effect for interactivity */
  &:hover {
    color: black;
    transform: translateY(-5px); /* Lift the card on hover */
    box-shadow: 0 10px 8px rgba(238, 228, 228, 0.4);
    background-color: #fff; /* Change background color on hover */
  }
`;

const SkillName = styled.h4`
  font-size: 1.1em; /* Slightly smaller font size for title */
  margin: 0 auto 10px auto; /* Center title horizontally and add space below */
  font-weight: bold;
`;

const ProgressBarContainer = styled.div`
  height: 7px;
  background-color: black; /* Light gray background for progress bar */
  border-radius: 5px;
  overflow: hidden;
  width: 80%; /* Progress bar spans 80% of the card width */
  margin: 0 auto; /* Center progress bar horizontally */
`;

const ProgressFill = styled.div`
  background-color: white; /* Red color for progress bar fill */
  height: 100%;
  transition: width 0.3s ease-in-out;
  width: ${(props) => props.progress || '0%'}; /* Set progress based on prop */
`;

const Skills = () => {
  return (
    <SkillsSection>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillName>{skill.name}</SkillName>
            <ProgressBarContainer>
              <ProgressFill progress={skill.progress + '%'} />
            </ProgressBarContainer>
          </SkillCard>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
