import styled from "styled-components";

export const Dropdown=styled.div`
  position: relative;
  padding: 5px 0;
  &:hover :last-child{
    opacity: 1;
    top:10px;
    pointer-events: visible;
    cursor: pointer;
  }
`
export const DropdownToggle=styled.div`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 16px;`
export const DropdownMenu=styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: absolute;
  width: max-content;
  padding-top: 20px;
  opacity: 0;
  transition: all .5s;
  top: 0px;
  pointer-events: none ;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 16px;
  &:hover{
    cursor: pointer;
  }
`
export const DropdownItem=styled.div``