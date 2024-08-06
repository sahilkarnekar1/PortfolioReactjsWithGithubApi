import React from 'react';
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

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #935;
  border-radius: 50%;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: black;
`;

const Services = () => {
  return (
    <Wrapper>
      <Title>Our Services</Title>
      <ServiceList>
        <ServiceItem>
          <IconWrapper>
            <Icon src="https://e7.pngegg.com/pngimages/262/104/png-clipart-website-development-web-design-web-application-web-developer-world-wide-web-web-design-search-engine-optimization-web-design.png" alt="Service Icon" />
          </IconWrapper>
          <div>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>
              We provide custom web development solutions to help your business succeed online.
            </ServiceDescription>
          </div>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper>
            <Icon src="https://w7.pngwing.com/pngs/595/432/png-transparent-graphic-designer-graphic-design-business-gadget-logo-media-thumbnail.png" alt="Service Icon" />
          </IconWrapper>
          <div>
            <ServiceTitle>Graphic Design</ServiceTitle>
            <ServiceDescription>
              Our talented designers create stunning visuals that elevate your brand identity.
            </ServiceDescription>
          </div>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper>
            <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Android_logo_2019.png/800px-Android_logo_2019.png" alt="Service Icon" />
          </IconWrapper>
          <div>
            <ServiceTitle>Mobile App Development</ServiceTitle>
            <ServiceDescription>
              We build innovative and user-friendly mobile apps for Android and iOS platforms.
            </ServiceDescription>
          </div>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper>
            <Icon src="https://e7.pngegg.com/pngimages/695/1018/png-clipart-desktop-computer-computer-graphics-computer-monitor-computer-purple-computer-network-thumbnail.png" alt="Service Icon" />
          </IconWrapper>
          <div>
            <ServiceTitle>Desktop Applications Development</ServiceTitle>
            <ServiceDescription>
              We provide custom Desktop Applications Development solutions to help your business succeed online.
            </ServiceDescription>
          </div>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper>
            <Icon src="https://w7.pngwing.com/pngs/234/329/png-transparent-python-logo.png" alt="Service Icon" />
          </IconWrapper>
          <div>
            <ServiceTitle>Python Proramming</ServiceTitle>
            <ServiceDescription>
              We provide custom Python Proramming solutions to help your business succeed online.
            </ServiceDescription>
          </div>
        </ServiceItem>
      </ServiceList>
    </Wrapper>
  );
};

export default Services;
