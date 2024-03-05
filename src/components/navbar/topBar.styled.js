import styled from "styled-components"
import {Link} from "react-router-dom";

export const TopBarTitle=styled.div`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`
export const TopBarBox=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`
export const TopBarDelimiter=styled.div`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 16px;
`
export const TopBarLink=styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: 16px;
`
export const TopBarCurrencyBox=styled.div`
    
`
export const TopBarContentContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 50px;
`