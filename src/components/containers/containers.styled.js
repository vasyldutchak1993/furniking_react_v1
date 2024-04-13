import styled from "styled-components"
import media from "styled-media-query"
import {BREAK_POINTS} from "../../utils/breakPoints";
// {
//     huge: '1440px',
//         large: '1170px',
//     medium: '768px',
//     small: '450px',
// }
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
        padding: 25px 10px;
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
    padding: 0 10px;
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        padding: 10px;
    `}
    
`
export const ActionContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        flex-direction:column;
        align-items:start;
    `}
    &.action_container_fluid{
        ${media.lessThan(BREAK_POINTS.MEDIUM)`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        .logo_cell { grid-area: 1 / 1 / 2 / 3; }
        .actions_cell { 
            align-self: center;
            justify-content: end;
            grid-area: 1 / 3 / 2 / 5; 
        }
        .search_cell { grid-area: 2 / 1 / 3 / 5; }
    `}
    }
    
`

export const FlexContainer=styled.div`
  display: flex;
  column-gap: 20px;
    &.contact_flex{
        :first-child,:last-child{
            flex-basis: 50%;
        }
        .bordered{
            border: 1px solid ${props=>props.theme.colors.green};
        }
        ${media.lessThan('900px')`
        flex-direction: column;
        row-gap: 30px;
        .bordered{
        
            max-width:100%;
            width:100%;
            min-height:400px;
        }
    `}
    }
`

export const GridArticlesContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-auto-rows: auto;
    &>*{
        border-radius: 10px;
    }
    ${media.lessThan(BREAK_POINTS.LARGE)`
        grid-template-columns: repeat(3, 1fr);
    `}
    ${media.lessThan('1086px')`
        grid-template-columns: repeat(2, 1fr);
    `}
${media.lessThan(BREAK_POINTS.MEDIUM)`
        grid-template-columns: repeat(1, 1fr);
    `}
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
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        place-items: baseline;
        align-items: flex-start;
        grid-row-gap: 20px;
    `}
${media.lessThan(BREAK_POINTS.SMALL)`
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
        place-items: baseline;
        align-items: flex-start;
        grid-row-gap: 20px;
    `}
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
    margin: 25px 0;
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        place-items:center;
        justify-items: baseline;
        place-items: center;
    justify-items: baseline;
    margin: 25px auto;
    width: max-content;
    `} 
    ${media.lessThan('540px')`
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        place-items:center;
        justify-items: baseline;
    `}
`

export const SearchContainer=styled.div`
    max-width: 582px;
    width: 100%;
    position: relative;
    margin: 0 10px;
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
    ${media.lessThan(BREAK_POINTS.MEDIUM)`
        max-width: 100%;
        width:100%;
        margin:0;
    `}
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