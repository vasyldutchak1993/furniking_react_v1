import styled from "styled-components"

export const PageWrapperStyled=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props=>props.theme.colors.white};
  min-height: 100vh;
`
export const MainContainerStyled=styled.main`
   flex: 1 0 auto;
`
export const HeaderContainerStyled=styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ContentContainerStyled=styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    &.rights-reserved-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25px 0;
    }

    &.d-flex-menu {
        display: flex;
        column-gap: 30px;
        align-items: center;
        height: inherit;
    }
`
export const TopBarContainerStyled=styled.div`
  width: 100%;
  background: ${props => props.theme.colors.green};
`
export const ActionContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
    
`

export const FlexContainer=styled.div`
  display: flex;
  column-gap: 20px;
`

export const GridFooterContainer=styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  place-items: end;
  align-items: baseline;
  &.mb-30{
    margin-bottom: 30px;
  }
`
export const FullWidthContainer=styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.grey};
`

export const FeatureContainer=styled.div`
/*  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  place-items: end;
  align-items: baseline;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`

export const SearchContainer=styled.div`
    max-width: 582px;
    width: 100%;
    position: relative;
    .data_search_view_container{
        position: absolute;
        z-index: 1000;
        top: calc(100% + 10px);
        width: 100%;
        padding: 20px 0;
        border: 1px dashed black;
        background: antiquewhite;
        transition: all 1s;
    }
`
export const BasketContainerStyled=styled.div`
    width: 100%;

    .table_header,.row {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        padding: 10px 0;
        place-items: center;
    }
    .table_header{
        padding: 15px 0;
        background: ${props=>props.theme.colors.primaryText};
        color: ${props=>props.theme.colors.white};
        text-transform: uppercase;
        font-weight: 600;
        font-size: 16px;
        &.d_flex{
            display: flex;
            padding: 15px;
            .price{
                color: #7AC751;
                font-size: 18px;
                font-weight: 700;
            }
        }
    }
    .serial_number{
        grid-area: 1 / 1 / 2 / 2;
        padding-left: 5px;
    }
    .product{
        grid-area: 1 / 2 / 2 / 6;
    }
    .quantity{
        grid-area: 1 / 6 / 2 / 9;
    }
    .price{
        grid-area: 1 / 9 / 2 / 11;
    }
    .total{
        grid-area: 1 / 11 / 2 / 13;
    }
    .table_body{
        display: flex;
        flex-direction: column;
        padding: 15px 0;
    }
`