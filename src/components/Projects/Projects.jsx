import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai"; // Example icon

const projects = [
  // Replace with your project details
   {
    title: "Lung Cancer Prediction using machine learning",
    description:
    "Machine learning model to predict lung cancer using random forest and naive bayes",
    techStack: ["Python", "Flask" , "Mongodb" , "Google collab"],
    githubLink: "https://github.com/Rishipandey1722/Lung-Cancer-Prediction-using-ML.git",
  },
  {
    title: "TODO web app",
    description:
      "Built a traditional todo web app for learning CRUD operations",
    techStack: ["SpringBoot", "MySQL"],
    githubLink: "https://github.com/Rishipandey1722/TodoApp.git",
  },
  {
    title: "User Management",
    description:
    "Login , Logout , Register , Edit Profile are impemented using spring security",
    techStack: ["SpringBoot" ,"MySQL"],
    githubLink: "https://github.com/Rishipandey1722/User-management.git",
  }, {
    title: "Employee Management",
    description:
    "Using react and springboot implemented CRUD operation to manage employees",
    techStack: ["React", "SpringBoot", "MySQL"],
    githubLink: "https://github.com/Rishipandey1722/EmployeeManagement.git",
  }, {
    title: "Student Management",
    description:
    "The Student Management System allows users to perform CRUD (Create, Read, Update, Delete) operations on student records. It provides a user-friendly interface for adding, editing, and deleting students.",
    techStack: ["SpringBoot" ,"MySQL"],
    githubLink: "https://github.com/Rishipandey1722/StudentManagementSpringboot.git",
  },
 
  {
    title: "Portfolio",
    description:
    "Portfolio website using react and with the help of ChatGpt",
    techStack: ["React"],
    githubLink: "https://github.com/Rishipandey1722/Portfolio.git",
  },
  // ... add more projects here
];

const ProjectsSection = styled.section`
  padding: 20px;
  background-color: #1f1f1f; /* Dark background color */
  color: #fff; /* Light text color */
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 80px;
  margin-right: 80px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 30px; /* Gap between grid items */
`;

const ProjectCard = styled.div`
  background-color: #292927; /* Darker card background for contrast */
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px; /* Rounded corners */
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer; /* Add hover effect for interactivity */
  &:hover {
    color: black;
    transform: translateY(-5px); /* Lift the card on hover */
    box-shadow: 4px 4px rgba(238, 228, 228, 0.4);
    background-color: white; /* Change background color on hover */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const TechStackItem = styled.span`
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #444;
  color: #ccc;
  font-size: 0.9em;
`;

const ProjectLink = styled.a`
  color: #fff;

  text-decoration: none;
  display: flex;
  align-items: center;
`;

const GitHubIcon = styled(AiFillGithub)`
  margin-right: 5px;
  color: #007bff;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>Projects</h1>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              {project.description.slice(0, 100)}...
            </ProjectDescription>
            <TechStackContainer>
              {project.techStack.map((tech, index) => (
                <TechStackItem key={index}>{tech}</TechStackItem>
              ))}
            </TechStackContainer>
            <ProjectLink
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> {/* Use the imported icon component */}
              <span>GitHub</span>
              {/* Removed "GitHub Repo" text */}
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
