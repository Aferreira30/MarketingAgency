import styled from "styled-components";

import seta from "../../../../img/seta.svg";

export const Container = styled.aside`
width: 100%;
height: 520px;
display: flex;
gap: 128px;

.contNumeros{
  width:505px;
  height: 310px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 42px;
  align-items: flex-start;

    .contAjusteNm{
      h1{
          font-size:${({theme})=>theme.fonts.LtNumbers.size}px ;
          font-weight:${({theme})=>theme.fonts.LtNumbers.weight} ;
          line-height:${({theme})=>theme.fonts.LtNumbers.lineHeight}px ;
          text-transform: capitalize;
      }
      span{
          font-size:${({theme})=>theme.fonts.LtParagraphFraca.size}px ;
          font-weight:${({theme})=>theme.fonts.LtParagraphFraca.weight} ;
          line-height:${({theme})=>theme.fonts.LtParagraphFraca.lineHeight}px ;
          text-transform: capitalize;
          color:${({theme})=>theme.fonts.LtParagraphFraca.color};
          width:155px;
          height: 48px;
      }
    }
  }
  .contCommit{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 610px;
  height: 234px;
  
    h3{
      width: 385px;
      height: 54px;
      font-size: ${({theme})=>theme.fonts.LtSubTitles.size}px;
      font-weight: ${({theme})=>theme.fonts.LtSubTitles.wight};
      line-height: ${({theme})=>theme.fonts.LtSubTitles.lineHeight}px;
    }
    p{
      width: 610px;
      height: 160px;
      font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
      color: ${({theme})=>theme.fonts.LtParagraph.color1};
      font-weight: ${({theme})=>theme.fonts.LtParagraph.weight};
      line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
      text-transform: capitalize;
      text-align: justify;
    }
    a{
        text-decoration: none;
        color: ${({theme})=>theme.fonts.LtParagraph.color3};
        font-weight: ${({theme})=>theme.fonts.LtParagraph.weight2};
        line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
        font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
        position: relative;
    }
    a::after{
      content:url(${seta}) ;
      position: relative;
      top: 0;
      left: 10px;
      z-index: 1;
    }
  }

`;