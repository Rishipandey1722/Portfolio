import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'; // Example icons

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem; 
  height:30rem;
  margin: 0 auto; /
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  overflow: hidden; /* Needed for hover effect */
  transition: all 0.3s ease-in-out;
`;

const ProfilePhotoWrapper = styled.div`
  position: relative;
  width: 100%; /* Ensures full container width */
`;

const ProfilePhoto = styled.img`
//   border-radius: 50%;
  width: 28rem; /* Increased photo size to 200px */
   /* Increased photo size to 200px */
  object-fit: cover; /* Ensure photo fills the container */
  transition: transform 0.3s ease-in-out;
`;

const ProfilePhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Adjust height for curve size */
  background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent overlay */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
`;




const Profile = ({ name, description, photoUrl, socialLinks }) => {
  return (
    <ProfileContainer onMouseOver={() => console.log('Hovered!')}>
      <ProfilePhotoWrapper>
        <ProfilePhoto src='/src/assets/RishiPandey.jpg' alt="Your Name" />
        <ProfilePhotoOverlay />
      </ProfilePhotoWrapper>
     
    </ProfileContainer>
  );
};

export default Profile;
