import styled from "styled-components";

export const MyProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1.2rem;
transition: 0.3s ease-in-out;
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
}
`;
export const ProjectCard = styled.div`
position: relative;
height: 200px;
overflow: hidden;
transition: all 0.3s ease-in-out;
.project-details{
    background-color: rgb(5 6 5 / 77%);
    height: 300px;
    width: 100%;
transform: translateY(100rem);
position: absolute;
padding: 1rem;
top: 0;
& h3 {
    font-size: 1.3rem;
    color: #2DC653;
}
}
&:hover .project-details{
    transform: translateY(0);

}
`;


// Project Detail Section Style 
export const ProjectDetailStyle = styled.div`
padding: 1.5rem 0;
display: flex;
@media (max-width: 768px) {
    flex-direction: column;
}
`;
export const ProjectDetailStyleLeft = styled.div`
& h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 3.5rem;
}
& h5 {
    font-size: 1.2rem;
    margin: 1rem 0;
    position: relative;
    display: inline-block;
    &:after{
        content: '';
        border: 1px solid green;
        position: absolute;
        width: 100%;
        bottom: -0.5rem;
        left: 0;
        margin-top: 1.2rem;
    }
}
& a {
    display: inline-block;
    margin: 2rem;
}
& ol {
    list-style: circle inside;
    padding-left: 1.2rem;
}
& ol li {
    color: #2DC653;
    list-style-type: circle inside;
}

`;
export const ProjectDetailStyleRight = styled.div`

& img{
    margin-top: 2rem;
    border-radius: 0.3rem;
}`;