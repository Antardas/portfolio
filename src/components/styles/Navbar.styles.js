import styled from 'styled-components';

/* const menuOpen = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;
 */

export const NavbarContainer = styled.div`
z-index: 1000;
position: fixed;
right: 0;
top: 0;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
export const NavLogo = styled.div`
& img {
    width: auto;
    width: 50px;
}
z-index: 111;
`;

export const Humberger = styled.button`
    position: absolute;
    left: 2rem;
    top: 1.5rem;
    z-index: 999999;
& svg {
    color: white;
    @media only screen and (min-width: 992px) {
        display: none;
    }
 }

`;

export const NavItems = styled.nav`
    display: flex;
    justify-content: flex-end;
    transition: 0.3s ease-in-out;
    background-color: #2DC653;
    width: 40rem;
border-radius: 0 0 0 2rem;


    @media only screen and (max-width: 992px) {
        &{ 
            width: 100%;
            flex-direction: column;
            transform: ${props => props.open ? 'translatey(100)' : 'translatey(-200%)'};
            position: absolute;
            top: 0rem;
            justify-content: left;
            align-items: flex-end;
            z-index: 1001;
            padding: 0.5rem;
        }

    }
`;
export const NavItem = styled.a`
    font-size: 1rem;
    line-height: -1rem;
    padding: 0.7rem 1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
    background-color: rgba(167, 139, 250, 0.3)
}
`;

export const NavButton = styled.button`
    border-radius: 0.4rem;

    border: 1px solid white;
    &:hover a{
    background-color: rgba(0, 0, 0, 0);
    }
    &:hover {
    background-color: rgba(0, 0, 0, 1);
    }
`;

