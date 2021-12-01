import styled from "styled-components";

export const AboutMeContainer = styled.div`
display: flex;
flex: 1 1 0;
@media only screen and (max-width: 992px) {
        flex-direction: column;
    }
`;
export const Info = styled.div`
    display: flex;
    flex: 1 1 0rem;
    flex-direction: column;
    `;

export const Counter = styled.div`
    flex: 1 1 0rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    `;
export const CounterCard = styled.div`
    width: 8rem;
    background: #222;
    text-align: center;
    padding: 2rem 0rem;
    margin: 1rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    transition: all .5s;
    font-size: 1.3rem;
    border: 1px solid #2DC653;
    &:hover{
        background: #333;
        transform: scale(1.3);
    }
    `;
