import styled from "styled-components";

import seta from "../../../../../img/setaBranca.svg";
import seta2 from "../../../../../img/seta.svg";


export const Container = styled.aside`
width: 100%;
height:312px;
margin: 0 auto;
align-self: flex-start;
background: linear-gradient(177.26deg, #3461FF 10.7%, #8399E9 103.87%);
margin-top:100px ;
text-transform: capitalize;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;

.contGeral{
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
.contH2{
  width: 687px;
  height: 312px;
  margin:  auto;
  align-self: center;
  position:relative;
    h2{
      width: 415px;
      height: 112px;
      position: absolute;
      left: 109px;
      top: 66px;
      font-size: ${({theme})=>theme.fonts.LtSubTitleForte.size}px;
      line-height: ${({theme})=>theme.fonts.LtSubTitleForte.lineHeight}px;
      font-weight: ${({theme})=>theme.fonts.LtSubTitleForte.weight};

    }
}
.contTextos{
  width: 610px;
  height: 179.15px;
  display: flex;
  flex-direction:column;
  gap:26px;
  align-self: center;
  position:relative;
p{
  width: 530px;
  height: 128px;
  color: #FFFFFF;
  justify-self: center;
  font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
  line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
  font-weight: ${({theme})=>theme.fonts.LtParagraph.weight};
  position: absolute;
  left: 0px;
  top: -60px;
  text-align: justify;
  margin-bottom: 50px;
}
a{
  justify-self: center;
  color: #FFFFFF;
  text-decoration: none;
  font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
  line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
  font-weight: ${({theme})=>theme.fonts.LtParagraph.weight2};
  position: relative;
}
a::after{
  content:url(${seta});
  position: absolute;
  left: 17.21%;
  right: 80.34%;
  top: 3.13%;
  bottom: 3.4%;
  z-index: 1;
}
a:hover{
  color: #3461FF;
  transition: 0.2s all;
}
a:hover::after{
  color: #3461FF;
  content:url(${seta2});
  height: 13.064315795898438px;
  width: 14.929620742797852px;
  transition: 0.2s all;
}
}
}

`;