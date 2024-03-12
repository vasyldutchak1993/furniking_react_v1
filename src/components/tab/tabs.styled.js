import styled from "styled-components";

export const TabsHeader=styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-content: center;
  color: ${props=>props.theme.colors.secondaryText};
  .active_tab{
    color: ${props=>props.theme.colors.green};
  }
  div{
    font-family: "Mulish", sans-serif;
    font-size: 24px;
    font-weight: ${props=>props.theme.fontWeight.bold};
    line-height: 30px;
    color: ${props=>props.theme.colors.secondaryText};
    transition: color .2s;
    &:hover{
      cursor: pointer;
      color: ${props=>props.theme.colors.green};
    }
  }
`
export const TabsContent=styled.div`
  /*display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;*/
`