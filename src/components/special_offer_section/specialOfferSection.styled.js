import styled from "styled-components";
import media from "styled-media-query";
import {BREAK_POINTS} from "../../utils/breakPoints";

export const OfferSectionContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 2fr;
    `}
`