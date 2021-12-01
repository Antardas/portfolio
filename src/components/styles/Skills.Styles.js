import styled from "styled-components";

export const SkillsContainer = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1.3rem 1.6rem;
padding: 1.3rem;
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
}
`;
export const SkillsBox = styled.div`
display:flex;
border-radius: 1.2rem;
flex-direction:column;
justify-content: center;
align-items: center;
padding: 1.5rem 1rem;
background-color: #222;
transition: 0.3s ease-in-out;

& img {
    height: 4rem;
    width: 4rem;
}
& h3 {
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
}
h3::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #2DC653;
    position: absolute;
    bottom: 0;
    left: 1%;
    top: 2rem;
}
&:hover{
transform: scale(1.1);
}
&:hover & img {
    transform: rotate(360deg);
}

`;