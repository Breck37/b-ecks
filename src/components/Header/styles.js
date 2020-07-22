import styled from 'styled-components';

export const HeaderStyled = styled.div`
    position: relative;

    @keyframes headroll {
        0% {
            animation-timing-function: linear;
            opacity: 0;
            width: 0;
        }
        25% {
            animation-timing-function: linear;
            width: 80vw;
        }
        50% {
            animation-timing-function: linear;
            width: 160vw;
        }
        75% {
            animation-timing-function: linear;
            width: 100vw;
        }
        100% {
            animation-timing-function: linear;
            width: 80vw;
        }
    }

    .container-wrap {
        filter: drop-shadow(0px 6px 3px rgba(50, 50, 0, 0.2));
    }

    .header-container {
        width: 80vw;
        height: 90px;
        clip-path: polygon(0% 0%,80% 0%,60% 100%, 0% 100%);
        background: rebeccapurple;
        margin-bottom: 1.45rem;
        animation: headroll 2.5s linear;
        position: relative;
    }

    @keyframes titlehide {
        0% {
            opacity: 0;
            display: none;
        }
        50% {
            opacity: 0;
            display: none;
        }
        100% {
            opacity: 1;
            display: visible;
        }
    }

    .title-link {
        color: white;
        text-decoration: none;
        animation: titlehide 2s linear;
    }
`;