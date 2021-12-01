import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles/Component.styles';
import { ProjectCard } from '../styles/MyProjects.style';

const Project = ({ project }) => {
    return (
        <ProjectCard>


                <img src={project.fullPage} alt="project-Fullpage" />
                <div className="project-details">
                    <h3>{project.title}</h3>
                    <Link to={`/projects/${project.id}`}>
                        <Button>
                            Explore Project
                        </Button>
                    </Link>
                        
                </div>
        </ProjectCard>
    );
};

export default Project;