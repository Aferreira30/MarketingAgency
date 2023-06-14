import styled from "styled-components";

import seta from "../../../../img/setaPequena.svg";

export const Container = styled.article`
width:100%;
height: 480px;
margin: 0 auto;
display: flex;
gap: 120px;
align-items: center;
text-transform:capitalize;

`;
export const Questions = styled.ul`
list-style: none;
width: 616px;
height: 300px;
display: flex;
flex-direction: column;
align-items: flex-start;
hr{
  width: 616px;
  margin:32px 0;
}
li{
  width:592px;
  height: 100px;
.contLi{
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-size: ${({theme})=>theme.fonts.LtParagraph.size2}px;
    font-weight: ${({theme})=>theme.fonts.LtParagraph.weight};
    line-height:${({theme})=>theme.fonts.LtParagraph.lineHeight2}px;
  }
  button{
    border: none;
  }
}
}
`;

export const ContTextos = styled.div`
width: 487px;
height: 300px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 42px;

h1{
    width: 487px;
    font-size: ${({theme})=>theme.fonts.LtSubTitleForte.size}px;
    font-weight: ${({theme})=>theme.fonts.LtSubTitleForte.weight2};
    line-height:${({theme})=>theme.fonts.LtSubTitleForte.lineHeight}px;
}
p{
    width: 431px;
    height: 72px;
    font-size: ${({theme})=>theme.fonts.LtParagraph.size2}px;
    font-weight: ${({theme})=>theme.fonts.LtParagraph.weight};
    line-height:${({theme})=>theme.fonts.LtParagraph.lineHeight2}px;
    color: ${({theme})=>theme.fonts.LtParagraph.color1};
    mix-blend-mode: normal;
    opacity: 0.75;
}
a{
text-decoration-line: underline;
text-transform: capitalize;
font-size: ${({theme})=>theme.fonts.LtParagraph.size2}px;
font-weight: ${({theme})=>theme.fonts.LtParagraph.weight2};
line-height:${({theme})=>theme.fonts.LtParagraph.lineHeight2}px;
color: ${({theme})=>theme.colors.button};
position: relative;
}
a::after{
  content:url(${seta});
  position: absolute;
  left: 95px;
}
`;

export const FormHelp = styled.form`
input{
  padding: 20px 18px;
  font-size:${({theme})=>theme.fonts.LtParagraphFraca.size}px ;
  width: 309px;
  height: 62px;
  background: #FAFAFA;
  border-radius: 37px;
  outline: none;
  border: none;
}
button{
  width: 144px;
  height: 62px;
  padding: 20px 24px;
  background: ${({theme})=>theme.colors.button};
  border: none;
  border-radius: 70px;
  font-size:${({theme})=>theme.fonts.LtParagraphFraca.size}px ;
  font-weight: ${({theme})=>theme.fonts.LtParagraphFraca.weight};
    line-height:${({theme})=>theme.fonts.LtParagraphFraca.lineHeight}px;
color:${({theme})=>theme.colors.buttonFont};
}
`;