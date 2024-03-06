import styled from "styled-components"

export const FooterMenuStyled=styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const FooterMenuTitle=styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.primaryText};
  font-weight: ${props => props.theme.fontWeight.bolder};
`

export const FooterMenuBox=styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: max-content;
`

export const FooterSocialContainer=styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const FooterSocialText=styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.primaryText};
  font-weight: ${props => props.theme.fontWeight.normal};
  line-height: 25px;
  text-align: justify;
`
