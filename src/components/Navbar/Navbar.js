import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavbarContainer, NavItems, NavItem, NavButton, Humberger } from '../styles/Navbar.styles';
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    console.log(isMobile)
    return (
        <div className=''>
            <NavbarContainer>
                {/* Nav Items */}
                <Humberger className='humberger' onClick={() => setIsMobile(!isMobile)} >
                    <svg viewBox="0 0 100 80" fill='white' width="40" height="40">
                        <rect width="70" height="10"></rect>
                        <rect y="30" width="30" height="10"></rect>
                        <rect y="15" width="50" height="10"></rect>
                    </svg>
                </Humberger>
                <NavItems className='' open={isMobile}>
                    <NavItem as={HashLink} to='/home#' >Home</NavItem>
                    <NavItem as={HashLink} to='/home#about' >About us</NavItem>
                    <NavItem as={HashLink} to='/home#projects' >Projects</NavItem>
                    <NavItem as={HashLink} to='/home#blogs' >Projects</NavItem>
                    <NavItem as={HashLink} to='/home#contact' >Contact</NavItem>
                    <NavButton><NavItem href='https://drive.google.com/u/0/uc?id=1-XymDh5BIfCSuYQX-wRGhgyHvqJHSSdC&export=download'> My Resume</NavItem></NavButton>

                </NavItems>

            </NavbarContainer>
        </div>
    );
};

export default Navbar;