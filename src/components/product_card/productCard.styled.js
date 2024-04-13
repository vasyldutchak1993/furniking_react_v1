import styled from "styled-components";

export const ProductCardContainer=styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .product_card_header_container {
    position: relative;
    width: 100%;
    min-height: 222px;
    height: 100%;
    overflow: hidden;
    
    img{
      transition: all .3s;
      cursor: pointer;
    }
    
    &:hover {
      .product_card_actions_container {
        right: 0;
        bottom: 0;
        visibility: visible;
      }
      img{
        transform: scale(1.1);
      }
    }

    img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product_card_actions_container {
      position: absolute;
      right: -100%;
      bottom: 0;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      padding: 10px 5px;
      transition: all .2s;
      visibility: hidden;

      .product_action_item {
        .item_favorite{
          background: ${props => props.theme.colors.green};
          color: ${props => props.theme.colors.white};
        }
        svg {
          padding: 10px;
          width: 39px;
          height: 39px;
          color: ${props => props.theme.colors.white};
          border-radius: 50%;
          background: ${props => props.theme.colors.primaryText};
          transition: all .5s;
          
          &:active{
            -webkit-box-shadow: 0px 0px 5px 5px ${props => props.theme.colors.green};
            -moz-box-shadow: 0px 0px 5px 5px ${props => props.theme.colors.green};
            box-shadow: 0px 0px 5px 5px ${props => props.theme.colors.green};
          }
          
          &:hover {
            cursor: pointer;
            background: ${props => props.theme.colors.green};
            color: ${props => props.theme.colors.white};
          }
        }
      }
    }
  }

  .product_card_type {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    color: rgba(117, 117, 117, 0.71);
  }

  .product_card_title {
    font-family: "Rubik", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #11142D;
    text-decoration: none;
  }

  .product_card_box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .product_card_price_box {

      display: flex;
      column-gap: 10px;

      .product_card_currentPrice {
        color: ${props => props.theme.colors.green};
        font-size: 18px;
        font-weight: ${props => props.theme.fontWeight.bolder};
      }

      .product_card_defaultPrice {
        text-decoration-line: line-through;
        color: #CCCCCC;
        font-size: 18px;
        font-weight: ${props => props.theme.fontWeight.bolder};
      }
    }
  }

  .product_card_chip_container {
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-right-radius: 5px;
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: 12px;
    padding: 5px 9px;

    &.new {
      background: ${props => props.theme.colors.blue};
    }

    &.sale {
      background: ${props => props.theme.colors.green};
    }

    &.discount {
      background: ${props => props.theme.colors.red};
    }

  }

  .product_card_actions_container {

  }

`
