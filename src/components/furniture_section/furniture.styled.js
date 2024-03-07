import styled from "styled-components";
import {Link} from "react-router-dom";

export const FurnitureContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
export const FurnitureCardStyled=styled.div`
  
  position: relative;
  width: 100%;
  height: 100%;
  padding: 49px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  
  &.card_big{
    grid-area: 1 / 1 / 3 / 2;
    min-height: 400px;
  }
  &.card_small_bottom{
    grid-area: 2 / 2 / 3 / 3;
  }
  &.card_small_top{
    grid-area: 1 / 2 / 2 / 3; 
  }
`
export const FurnitureImageContainer=styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & > img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const FurnitureTitle=styled.div`
  color: ${props => props.theme.colors.primaryText};
  font-size: 22px;
  font-weight:  ${props => props.theme.fontWeight.bolder};
  position: relative;
  z-index: 100;
  font-family: "Mulish", sans-serif;
`
export const FurnitureSubTitle=styled.div`
  color: ${props => props.theme.colors.green};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeight.bold};
  position: relative;
  z-index: 100;
  font-family: "Mulish", sans-serif;
`
export const FurnitureLink=styled(Link)`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 16px;
  position: relative;
  z-index: 100;
  font-family: "Mulish", sans-serif;
  text-decoration: none;
  transition: color .3s;
  
  &:hover{
    color: ${props => props.theme.colors.green};
  }
`