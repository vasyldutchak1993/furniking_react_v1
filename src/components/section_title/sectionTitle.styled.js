import styled from "styled-components"
import media from "styled-media-query";
import {BREAK_POINTS} from "../../utils/breakPoints";

export const SectionTitleStyled=styled.div`
    font-family: "Mulish", sans-serif;
    color: ${props => props.theme.colors.primaryText};
    font-size: 36px;
    font-weight: ${props => props.theme.fontWeight.bolder};
    text-align: center;
    text-transform: uppercase;
    margin: 25px;
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        display:none;
    `}
`
