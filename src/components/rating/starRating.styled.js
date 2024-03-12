import styled from "styled-components";
import {FaRegStar} from "react-icons/fa";
const getCurrentColor = ({theme,raiting,rate}) => {
    return raiting<=rate ? theme.colors.green : theme.colors.secondaryText
}
export const StarRatingContainer=styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`

export const RateStar=styled(FaRegStar)`
  color: ${getCurrentColor};
`