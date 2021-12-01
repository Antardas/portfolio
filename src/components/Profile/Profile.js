import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from '../styles/Container.styles';
import myImg from '../../assets/img/myImg.jpg';
import { Heading, Text, Paragraph, Button, SocialIcon } from '../styles/Component.styles';
import { Avatar } from '../styles/Banner.styles';

const Profile = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    const CustomTypeWriter = styled(Typewriter)`
    display: inline !important;
    `;
    return (
        <Container data-aos="fade-top" id='#home'>
            <Avatar>
                <img src={myImg} alt="avatar-img" />
            </Avatar>
            <Heading fontSize='2rem'>Hi THERE!</Heading>
            <Heading fontSize='2rem'>I'm <Text color="#2DC653">Antar Das</Text></Heading>
            <Heading fontSize='2rem'>I am &nbsp;
                <Text color="#2DC653">
                    <CustomTypeWriter
                        style={{
                            display: 'inline !important',
                        }}
                        options={{
                            strings: ['  MERN Stack Developer', 'Problem Solver', '  Creative'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Text>
            </Heading>
            <Paragraph fontSize='1.3rem' margin='1.3rem 0' bold>
                An aspiring MERN Stack Developer. I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in HTML5, CSS3, Javascript, Bootstrap, React, Node JS, Express JS, Mongo DB. Resourceful Web Developer lends hands-on approach to customizing web presence strategy.
            </Paragraph>
            <Button margin='1.3rem 0'>
                <a href='https://drive.google.com/u/0/uc?id=1-XymDh5BIfCSuYQX-wRGhgyHvqJHSSdC&export=download'>Download Resume <i className="fad fa-long-arrow-down"></i></a>
            </Button>
            <SocialIcon>
                <li data-aos='fade-left'><a href="https://github.com/antardas" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                <li data-aos='fade-botton'><a href="https://www.linkedin.com/in/antardas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li data-aos='fade-left'><a href="https://www.facebook.com/das.antar100/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            </SocialIcon>
        </Container>
    );
};

export default Profile;