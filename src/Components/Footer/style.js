import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
height: 119px;
background: ${({theme})=>theme.colors.bgFooter};
color: ${({theme})=>theme.colors.buttonFont};
margin-top: 30%;
.contFooter{
  width: 1240px;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

    h2{
      width: 272px;
      height: 20px;
      font-size: ${({theme})=>theme.fonts.LtMenu.size2}px;
      line-height: ${({theme})=>theme.fonts.LtMenu.lineHeight2}px;
      font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
    }
}
`;

export const FooterList = styled.ul`
width: 297px;
height: 20px;
list-style: none;
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 125px;
    li{
      height: 20px;
      font-size: ${({theme})=>theme.fonts.LtMenu.size2}px;
      line-height: ${({theme})=>theme.fonts.LtMenu.lineHeight2}px;
      font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
    }
`;