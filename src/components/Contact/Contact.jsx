import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
color:white;
  background-color: #1f1f1f;
  padding: 50px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const EmailLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactMe = () => {
  const emailAddress = "pandeyrishikr@gmail.com";
  const mobileNumber = "+91 9198284707";
  const address = "230134, Pratapgarh, India";

  const handleEmailClick = () => {
    const subject = "Inquiry from your website";
    const body = "Hello, I found your website and I would like to inquire about...";
    const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailToLink, "_blank");
  };
  

  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <ContactInfo>
        <p>Email: <EmailLink href={`mailto:${emailAddress}`} onClick={handleEmailClick}>{emailAddress}</EmailLink></p>
        <p>Mobile: {mobileNumber}</p>
        <p>Address: {address}</p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default ContactMe;
