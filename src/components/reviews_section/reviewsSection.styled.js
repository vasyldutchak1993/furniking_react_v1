import styled from "styled-components";
import media from "styled-media-query";
import {BREAK_POINTS} from "../../utils/breakPoints";

export const SliderWrapper=styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        display:none;
    `}
`