import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Heading, Text } from '../styles/Component.styles';
import { Container } from '../styles/Container.styles';
import { MyProjectsContainer, ProjectCard } from '../styles/MyProjects.style';
import Project from './Project';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projectsData.JSON')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <Container id="projects">
            <Heading textAlign='center' fontSize='5rem'>My <Text color='#2DC653'>Projects</Text> </Heading>
            <hr className='line-break' />
            <MyProjectsContainer>
                
                {
                    projects.map(project => <Project key={project.id} project={ project} />)
                }
            </MyProjectsContainer>
        </Container>
    );
};

export default MyProjects;