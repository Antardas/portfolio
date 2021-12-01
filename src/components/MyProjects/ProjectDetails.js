import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Button, Heading } from '../styles/Component.styles';
import { Container } from '../styles/Container.styles';
import { ProjectDetailStyle, ProjectDetailStyleLeft, ProjectDetailStyleRight } from '../styles/MyProjects.style';
import data from './damage.json'



const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
console.log(data)
    useEffect(() => {
        /*
         fetch('./damage.JSON', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setProject(data);
            });
             */
        const findProject = data.find(project => project.id === id);
        if (findProject) {
            setProject(findProject);
        }
    }, []);
    console.log(project);
    if (!project.id) { return <div>Loading...</div> }
    return (
        <Container>
            <div>
            <Navbar />

            </div>
            <ProjectDetailStyle>
                <ProjectDetailStyleLeft>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <h5>Key Features</h5>
                    <ol>
                        {
                            project.features.map(feature => <li key={feature}>{feature}</li>)
                        }
                    </ol>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button><i class="fab fa-chrome"></i></Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button><i class="fab fa-github"></i></Button>
                    </a>

                    
                </ProjectDetailStyleLeft>
                <ProjectDetailStyleRight>
                   
                    <img src={project.fullPage} alt="project" />
                    {
                        project.subPage.map((subPage, index) => <img key={index} src={subPage} alt="project" />)
                    }
                </ProjectDetailStyleRight>
            </ProjectDetailStyle>
        </Container>
    );
};

export default ProjectDetails;