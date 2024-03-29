import styled from "styled-components";

export const BasketItemStyled=styled.div`
    border: 1px solid ${props=>props.theme.colors.primaryText};
    margin-bottom: 15px;
    margin-top: 15px;
    .price,.total{
        color: #7AC751;
        font-size: 18px;
        font-weight: 700;
    }
    .quantity{
        display: flex;
        justify-items: center;
        align-items: center;
        column-gap: 10px;
        .quantity_value{
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            background: ${props=>props.theme.colors.white};
            border: none;
            border: 1px solid ${props=>props.theme.colors.primaryText};
            padding: 0 15px;
        }
    }
`