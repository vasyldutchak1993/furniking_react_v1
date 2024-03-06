import styled from "styled-components"
import {Link} from "react-router-dom";
import {ReactSVG} from "react-svg";

export const RightsReserved=styled.div`
  font-size: 14px;
  font-weight: ${props=>props.theme.fontWeight.normal};
  color: ${props=>props.theme.colors.primaryText};
`

export const RightsReservedLinks=styled.div`
  display: flex;
  column-gap: 30px;
`

export const RightsReservedLink=styled(Link)`
  font-size: 14px;
  font-weight: ${props=>props.theme.fontWeight.normal};
  color: ${props=>props.theme.colors.primaryText};
  text-decoration: none;
`
export const SocialItemsContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 15px;
`
export const SocialLink=styled(Link)`
  text-decoration: none;
  
  svg{
    width: 24px;
    height: 24px;
    transition: 0.3s;
    color: ${props=>props.theme.colors.primaryText};
  }
  svg:hover{
    color: ${props=>props.theme.colors.green};
  }
`

