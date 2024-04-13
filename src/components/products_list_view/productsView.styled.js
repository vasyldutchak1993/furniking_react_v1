import styled from "styled-components";
import media from "styled-media-query";
import {BREAK_POINTS} from "../../utils/breakPoints";

export const ProductsListContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows:1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

    ${media.lessThan(BREAK_POINTS.LARGE)`
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows:1fr;
    `}

    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows:1fr;
    `}
    ${media.lessThan('550px')`
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows:1fr;
    `}
`

export const PaginationContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
    margin-top: 25px;
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        margin-bottom:25px;
    `}
  .btn {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};

    &.btn-link {
      font-family: "Mulish", sans-serif;
      font-size: 18px;
      font-weight: ${props => props.theme.fontWeight.bold};
      padding: 13px 15px;
      line-height: 22.59px;
      transition: all .3s;

      svg {
        font-size: 18px;
        margin-left: 10px;
        transition: all .3s;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 5px 3px ${props => props.theme.colors.green};

        svg {
          transform: scale(1.1) translateX(5px);
        }
      }
    }

    &.btn-pagination {
      width: 29px;
      height: 29px;
      font-size: 18px;
      transition: all .3s;

      svg {
        transition: all .3s;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 5px 3px ${props => props.theme.colors.green};

        svg {
          transform: scale(1.1);
        }
      }
    }

    .text {
      font-size: 18px;
      font-weight: 400;
      color: ${props => props.theme.colors.secondaryText};
    }

  }
}
  .btn-pagination-box{
    display: flex;
    justify-items: center;
    justify-content: center;
  }
  .current_page {
  width: 58px;
  height: 29px;
  border: solid 1px ${props => props.theme.colors.secondaryText};

  input[type=number] {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    text-align: center;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }


`