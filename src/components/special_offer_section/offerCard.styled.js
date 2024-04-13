import styled, {keyframes} from "styled-components";

const blink=keyframes`
  0% {
    box-shadow: 0px 0px 2px 2px #00B7F1;
  }
  25% {
    box-shadow: 1px 1px 3px 3px #00B7F1;
  }
 50% {
    box-shadow: 0px 0px 2px 2px #00B7F1;
  }
  75% {
    box-shadow: 2px 2px 5px 3px #00B7F1;
  }
  100% {
    box-shadow: 0px 0px 2px 2px #00B7F1;
  }
`

const heartbeat=keyframes`
  rom {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
`
export const ImageContainerStyled=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: green;
  top: 0;
  left: 0;
  z-index: -1;
  
  img{
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const OfferCardContainer=styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  z-index: 100;

  .title {
    color: ${props => props.theme.colors.primaryText};
    font-size: 22px;
    font-weight: ${props => props.theme.fontWeight.bolder};
    font-family: "Mulish", sans-serif;
  }

  .text {
    color: ${props => props.theme.colors.secondaryText};
    font-size: 12px;
    font-weight: ${props => props.theme.fontWeight.normal};
      max-width: 50%;
    width: 100%;
  }

  .price_container {
    display: flex;
    column-gap: 10px;
    align-items: center;
    font-family: "Mulish", sans-serif;

    .currentPrice {
      color: ${props => props.theme.colors.green};
      font-size: 18px;
      font-weight: ${props => props.theme.fontWeight.bolder};
    }

    .defaultPrice {
      text-decoration-line: line-through;
      color: #CCCCCC;
      font-size: 18px;
      font-weight: ${props => props.theme.fontWeight.bolder};
    }

    .btn_offer {
      font-family: "Mulish", sans-serif;
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.green};
      font-weight: ${props => props.theme.fontWeight.bolder};
      font-size: 12px;
      border-radius: 2px;
      padding: 7.5px 10px;
      border: none;
      transition: all .3s;

      &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 5px 3px ${props => props.theme.colors.green};
      }

      &:active {
        cursor: pointer;
        box-shadow: 1px 1px 2px 1px ${props => props.theme.colors.green};
      }
    }

  }

  .sales_container {
    display: flex;
    align-items: center;
    column-gap: 5px;

    .sale_item {
      width: 50px;
      height: 50px;
      background: ${props => props.theme.colors.green};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 14px;
      color: ${props => props.theme.colors.white};
      font-weight: ${props => props.theme.fontWeight.bolder};

      &.animate {
        animation: ${heartbeat} 2s linear infinite;
      }
    }

    .sale_item_label {
      font-size: 12px;
      font-weight: ${props => props.theme.fontWeight.normal};
    }
  }

  .chip_container {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    font-family: "Mulish", sans-serif;
    font-size: 12px;
    font-weight: ${props => props.theme.fontWeight.bolder};
    color: ${props => props.theme.colors.white};
    line-height: 16px;
    letter-spacing: 0.008em;
    text-align: center;
    &.animate_chip {
      animation: ${blink} 2s linear infinite;
    }

  }

  .chip_container.new {
    background: #00B7F1;
  }

`


