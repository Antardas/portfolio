import styled from "styled-components";
export const BannerStyle = styled.div`
display: flex;
@media only screen and (max-width: 992px) {
    flex-direction: column;
    }
`;
export const BannerLeft = styled.div`
    position: fixed;
    height: 100%;
    width: 15rem;
    background-color: #2DC653;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-align: center;
    z-index: 1000;
    & img {
        position: absolute;
        left: 50%;
        transform: translate(-50% -50%);
        border-radius: 50%;
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
        cursor: pointer;
    }

    @media only screen and (max-width: 992px) {
        display: none;
    }
    @media only screen and (max-width: 1024px) {
        & img {
            width: 10rem;
            left: 68%;
        }
    }
`;
export const BannerRight = styled.div`
width: calc(100% - 15rem);
margin-left: 30%;

@media only screen and (max-width: 992px) {
        width: 100%;
        margin-left: 0;
    }
`;
export const Avatar = styled.div`
    & img {
        margin: 0 auto;
        display: block;
        border-radius: 50%;
        width: 10rem;
    }
    @media only screen and (min-width: 992px) {
        display: none;
    }
`;
export const BannerLeftContent = styled.div``;
export const BannerRightContent = styled.div``;
