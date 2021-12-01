import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 3rem;
    margin: 0 auto;
min-height: 100vh;
    & .line-break {
        color: #2DC653;
        border :1px solid;
        margin-top: 1.5rem;
    }
    & .green__text {
        text-align: center;
        font-size: 2rem;
        color: #2DC653;
    }
    @media only screen and (max-width: 992px) {
        box-sizing: border-box;
        width: 90%;
        padding: 0;
    }
`;
