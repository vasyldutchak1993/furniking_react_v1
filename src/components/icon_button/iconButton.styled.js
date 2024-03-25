import styled, {keyframes} from "styled-components";
const wobble=keyframes`
    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    15% {
        -webkit-transform: translateX(-3px) rotate(-6deg);
        transform: translateX(-3px) rotate(-6deg);
    }
    30% {
        -webkit-transform: translateX(2px) rotate(6deg);
        transform: translateX(2px) rotate(6deg);
    }
    45% {
        -webkit-transform: translateX(-2px) rotate(-3.6deg);
        transform: translateX(-2px) rotate(-3.6deg);
    }
    60% {
        -webkit-transform: translateX(2px) rotate(2.4deg);
        transform: translateX(2px) rotate(2.4deg);
    }
    75% {
        -webkit-transform: translateX(-2px) rotate(-1.2deg);
        transform: translateX(-2px) rotate(-1.2deg);
    }
`
export const ButtonContainer=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    transition: all .5s;
    border: none;
    position: relative;
    color: ${props=>props.theme.colors.primaryText};
    font-size: 26px;
    background: none;
    &:hover{
        cursor: pointer;
        color: ${props=>props.theme.colors.black};
    }
    
    .chip{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: -50%;
        transform: translateX(-50%);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: ${props=>props.theme.colors.green};
        color:  ${props=>props.theme.colors.white};
        font-family: "Rubik";
        font-size: 10px;
        font-weight: 400;
        animation: ${wobble} 0.8s  infinite;
        animation-delay: 1s;
    }
    
`