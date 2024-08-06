import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #888;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
  color: #888;
`;

const Home = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/sahilkarnekar1') // Replace with your GitHub username
      .then(response => response.json())
      .then(data => {
        setProfileData(data);
      })
      .catch(error => {
        console.error('Error fetching GitHub profile data:', error);
      });
  }, []);

  return (
    <Wrapper>
      {profileData && (
        <>
          <ProfileImage src={profileData.avatar_url} alt="Profile" />
          <ContentWrapper>
        <Title>Sahil Karnekar</Title>
        <Subtitle>B.E.I.T.</Subtitle>
        <Description>
          Welcome to my portfolio! I am a passionate web developer & software developer with expertise
          in building responsive and user-friendly websites & applications. I love turning
          ideas into beautiful and functional websites. Feel free to explore my
          projects and get in touch!
          <p>Note : Image Fetched from Github Profile</p>
        </Description>
      </ContentWrapper>
      
        </>
      )}
    </Wrapper>
  );
};

export default Home;