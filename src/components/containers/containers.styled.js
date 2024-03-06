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
  &.rights-reserved-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
  }
  &.d-flex-menu{
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