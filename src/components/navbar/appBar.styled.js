import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavContainer=styled.div`
  width: 100%;
  background: ${props=>props.theme.colors.menuBg};
  height: 67px;
  display: flex;
  align-items: start;
`

export const MenuLink=styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: 14px;
  transition: color .3s;

  &:hover,&.active {
    color: ${props => props.theme.colors.green};
  }
`