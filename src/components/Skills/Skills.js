import React, { useEffect, useState } from 'react';
import { Heading, Text } from '../styles/Component.styles';
import { Container } from '../styles/Container.styles';
import { SkillsBox, SkillsContainer } from '../styles/Skills.Styles';


const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('./skills.json')
            .then(res => res.json())
            .then(data => {
                setSkills(data)
            })

    }, [])
    return (
        <Container>
            <Heading textAlign='center' fontSize='5rem'><Text color='#2DC653'>My</Text> Skills</Heading>
            <hr className='line-break' />
            <SkillsContainer>
                {
                    skills.map((skill, index) => {
                        return (
                            <SkillsBox data-aos="zoom-in-up" key={index}>
                                <img src={skill.img} alt="" />
                                <h3>{skill.name}</h3>
                            </SkillsBox>
                        )
                    }
                    )
                }

            </SkillsContainer>
        </Container>
    );
};

export default Skills;