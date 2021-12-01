import React from 'react';
import { Heading, SocialIcon, Text } from '../styles/Component.styles';
import { Container } from '../styles/Container.styles';
import { AboutMeContainer, Counter, Info, CounterCard } from '../styles/AboutMe.styles';

const Skills = () => {
    return (
        <Container id='about'>
            <Heading textAlign='center' fontSize='5rem'><Text color='#2DC653'>About</Text> Me</Heading>
            <hr className='line-break' />
            <AboutMeContainer className='mt-5'>
                <Info>
                    <h3 className='text-lg mt-2'>Name: <Text color='#2DC653'>Antar Das</Text></h3>
                    <h3 className='text-lg mt-2'>Age: <Text color='#2DC653'>18+</Text></h3>
                    <h3 className='text-lg mt-2'>Name: <Text color='#2DC653'>Antar Das</Text></h3>
                    <h3 className='text-lg mt-2'>Qualifiation: <Text color='#2DC653'>Department Of Commerce (HSC)</Text></h3>
                    <h3 className='text-lg mt-2'>Post: <Text color='#2DC653'>Jr. MERN Stack Developer</Text></h3>
                    <h3 className='text-lg mt-2'>Language: <Text color='#2DC653'>Bangla & English</Text></h3>
                    <SocialIcon>
                        <li data-aos='fade-left'><a href="https://github.com/antardas" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                        <li data-aos='fade-botton'><a href="https://www.linkedin.com/in/antardas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                        <li data-aos='fade-left'><a href="https://www.facebook.com/das.antar100/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                    </SocialIcon>
                </Info>
                <Counter>
                    <CounterCard>
                        <h3 className='text-lg'>
                            <Text color='#2DC653'>7+ Month</Text>
                            <br />
                            Years Of Experience</h3>
                    </CounterCard>
                    <CounterCard>

                        <h3 className='text-lg'><Text color='#2DC653'>10+</Text> <br /> Total Project: </h3>
                    </CounterCard>
                    <CounterCard>
                        <h3 className='text-lg'><Text color='#2DC653'>5+</Text>
                            <br />
                            Happy Clients</h3>
                    </CounterCard>
                    <CounterCard>
                        <h3 className='text-lg'><Text color='#2DC653'>1+</Text>
                            <br />
                            Award Won</h3>
                    </CounterCard>

                </Counter>
            </AboutMeContainer>


        </Container>
    );
};

export default Skills;