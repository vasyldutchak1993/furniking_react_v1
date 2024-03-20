import styled from "styled-components";

export const ReviewCardContainer=styled.div`
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 816px;
    overflow: hidden;
    padding-top: 50px;
`
export const CardWrapper=styled.div`
    position: relative;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
    padding: 80px 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
`

export const CardImageContainer=styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const CardText=styled.div`
    font-family: "DM Sans","Mulish";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: center;
`
export const CardUsername=styled.div`
    font-family: "DM Sans","Mulish";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: center;
`
export const CardOccupation=styled.div`
    font-family: "DM Sans","Mulish";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: center;
`



