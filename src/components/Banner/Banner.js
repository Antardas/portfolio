import React from 'react';

import Navbar from '../Navbar/Navbar';
import { BannerLeft, BannerStyle, BannerRight  } from '../styles/Banner.styles';
import myImg from '../../assets/img/myImg.jpg';
import Profile from '../Profile/Profile';
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills';
import MyServices from '../MyServices/MyServices';
import MyProjects from '../MyProjects/MyProjects';
import ContactForm from '../ContactForm/ContactForm';
import Blogs from '../Blogs/Blogs';
const Banner = () => {
    return (
        <BannerStyle>
            <BannerLeft>
                <img src={myImg} alt="myImage" />
            </BannerLeft>
            <BannerRight>
                <Navbar />
                <Profile />
                <AboutMe />
                <Skills />{/* */}
                <MyServices />
                <MyProjects />
                <Blogs/>
                <ContactForm/>
            </BannerRight>
        </BannerStyle>
    );
};

export default Banner;