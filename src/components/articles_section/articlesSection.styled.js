import styled from "styled-components";
import media from "styled-media-query";
import {BREAK_POINTS} from "../../utils/breakPoints";

export const ArticlesContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

    ${media.lessThan(BREAK_POINTS.MEDIUM)`
       grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
    `}
`

export const ArticleCardContainer=styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 150px 30px 30px 30px;
  position: relative;
  background: blanchedalmond;
  overflow: hidden;


  &:hover {
    .image_container {
      img {
        transform: scale(1.5);
      }
    }
  }


  .article_card_header {
    display: flex;
    column-gap: 15px;
    align-items: center;

    .article_card_type {
      display: flex;
      align-items: center;
      column-gap: 5px;
      background: #F8FAFB;
      text-transform: uppercase;
      color: ${props => props.theme.colors.green};
      font-size: 12px;
      padding: 5px 9px;
      border-radius: 5px;
    }

    .article_card_date {
      font-family: "Mulish", sans-serif;
      font-size: 14px;
      font-weight: ${props => props.theme.fontWeight.bold};
      color: ${props => props.theme.colors.white};

    }

  }

  .article_title {
    font-family: "Mulish", sans-serif;
    font-weight: ${props => props.theme.fontWeight.bolder};
    color: ${props => props.theme.colors.white};
    line-height: 46.8px;
    font-size: 39px;
  }

  .article_link {
    text-decoration: none;
    font-size: 14px;
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors.white};
    line-height: 18.2px;
    transition: color .3s;

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.green};
    }
  }

  .article_card_header, .article_title, .article_link {
    position: relative;
    z-index: 100;
  }

  .image_container {
    position: absolute;
    background: green;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .5s;
    }

  }
`