import styled from "styled-components";

export const ServicesContainer = styled.div`
display: grid;
margin: 4rem 0;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

}
@media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem;

}
`;
export const ServiceCard = styled.div`
border-left: 1px solid green;
padding: 0 0 0 2rem;
margin: 2rem 0;
position: relative;
.service-icon-box {
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    background-color: #2DC653;
    left: -1.5rem;
    top: -1.5rem;
    width: 3rem;
    height: 3rem;
    justify-content: space-around;
    & img {
        width: 50%;
        height: 50%;
    }
}
.service-icon {
    width: 100px;
    height: 100px;
}
`;