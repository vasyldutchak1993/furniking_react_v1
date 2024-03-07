import styled from "styled-components";

export const FeatureCardStyled=styled.div`
  width: max-content;
  display: flex;
  column-gap: 10px;
  align-items: center;
`
export const ImgContainer=styled.div`
  width: 58px;
  height: 58px;
  &>img{
    display: block;
    width: 100%;
    height: auto;
  }
`
export const FeatureContentBox=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const FeatureTitle=styled.div`
  font-size: 20px;
  color: ${props=>props.theme.colors.primaryText};
  font-weight: ${props=>props.theme.fontWeight.bold};
`
export const FeatureText=styled.div`
  font-size: 14px;
  color: ${props=>props.theme.colors.secondaryText};
  font-weight: ${props=>props.theme.fontWeight.bold};
`