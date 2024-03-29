import styled from "styled-components";

export const ButtonQuantityCounterStyled=styled.div`
   
 /*   overflow: hidden;
    border: 1px solid ${props=>props.theme.colors.green};*/
    button{
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: ${props=>props.theme.colors.green};
        outline: none;
        border: none;
        transition: all .3s;
        &:hover{
            cursor: pointer;
            color: ${props=>props.theme.colors.white};
            box-shadow: 0px 0px 5px 2px ${props=>props.theme.colors.primaryText};
        }
        &:active{
            cursor: pointer;
            color: ${props=>props.theme.colors.white};
            box-shadow: 0px 0px 2px 1px ${props=>props.theme.colors.primaryText};
        }
    }
`
