import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const TeamItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TeamImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  font-size: 1.2rem;
  color: black;
`;

const Note = styled.p`
  font-size: 1rem;
  color: #888;
  margin-top: 2rem;
`;

const AboutUs = () => {
  const [team] = useState([
    {
      name: "John Doe",
      role: "Web Developer",
      image: "https://i.pinimg.com/736x/51/e0/d5/51e0d5aa27808ce689e3dd5a5cd7685a.jpg",
    },
    {
      name: "Jane Smith",
      role: "Graphic Designer",
      image: "https://pngimages.in/uploads/png-compressd/2023/May-2023/businessman_Free_Transparent_Png_Images.png",
    },
    {
      name: "Mike Johnson",
      role: "Project Manager",
      image: "https://img.lovepik.com/free-png/20211227/lovepik-business-man-finishing-sleeves-png-image_400616545_wh300.png",
    }
  ]);

  return (
    <Wrapper>
      <Title>About Us</Title>
      <Description>
        We are a dedicated team of professionals passionate about creating high-quality web solutions. With years of experience in the industry, we deliver innovative and tailored web development services to our clients. Our mission is to provide exceptional user experiences and help businesses succeed online.
      </Description>
      <TeamList>
        {team.map((member, index) => (
          <TeamItem key={index}>
            <TeamImageWrapper>
              <TeamImage src={member.image} alt={member.name} />
            </TeamImageWrapper>
            <div>
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
            </div>
          </TeamItem>
        ))}
      </TeamList>
      <Note>
        * Note: The team members shown above are for illustrative purposes only and may not represent the actual team of our company.
      </Note>
    </Wrapper>
  );
};

export default AboutUs;
