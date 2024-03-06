import styled from "styled-components"
import {Link} from "react-router-dom";

export const FooterMenuItemStyled=styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: ${props => props.theme.colors.primaryText};
  font-weight: ${props => props.theme.fontWeight.normal};
`