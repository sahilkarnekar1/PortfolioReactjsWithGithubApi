import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1000px;
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background: #282c34;
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  flex-grow: 1;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #61dafb;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const PageButton = styled.button`
  background: #61dafb;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  color: #282c34;
  font-size: 1rem;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  useEffect(() => {
    fetch('https://api.github.com/users/sahilkarnekar1/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
      });
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleReadMore = (id) => {
    setExpandedProjects(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <Wrapper>
      <Title>Projects</Title>
      <p>Note : Repos Fetach from my github account.</p>
      <ProjectGrid>
        {currentProjects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectTitle>{project.name}</ProjectTitle>
            {project.description && (
              <ProjectDescription>
                {expandedProjects[project.id] || project.description.length <= 100
                  ? project.description
                  : `${project.description.substring(0, 100)}...`}
                {project.description.length > 100 && (
                  <ReadMoreButton onClick={() => toggleReadMore(project.id)}>
                    {expandedProjects[project.id] ? 'Read Less' : 'Read More'}
                  </ReadMoreButton>
                )}
              </ProjectDescription>
            )}
            <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
              Project Link
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <Pagination>
        <PageButton 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton 
            key={index} 
            onClick={() => setCurrentPage(index + 1)} 
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
        <PageButton 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </Pagination>
    </Wrapper>
  );
};

export default Projects;
