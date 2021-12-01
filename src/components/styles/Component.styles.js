import styled from "styled-components";

export const Text = styled.span`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    `;

export const Heading = styled.h1`
font-size: ${props => props.fontSize};
font-weight: bold;
text-align: ${props => props.textAlign || 'left'};


@media only screen and (max-width: 992px) {
        font-size: 2rem;
    }
`;
export const Paragraph = styled.p`
font-size: ${props => props.fontSize || "1rem"};
font-weight: ${props => props.bold || "normal"};
margin: ${props => props.margin || "0 0 0 0"};
`;
export const Button = styled.button`
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #2DC653;
    border: 1px solid transparent;
    transition: 0.1s ease-in-out;
    margin: ${props => props.margin || "0 0 0 0"};
    &:hover {
        background-color: #000;
        border: 1px solid #2DC653;
    }
`;
export const SocialIcon = styled.ul`
    display: flex;
    font-size: 1rem;
    margin: 2rem 0;
    & li{
        border-radius: 50%;
        line-height: 0.9rem;
        padding: 0.7rem;
        margin: 0 0.5rem;
        border: 0.2rem solid #2DC653;
    }
    & :hover {
        color: #2DC653;
    }
`;
export const SubmitButton = styled(Button)`
    
`;

