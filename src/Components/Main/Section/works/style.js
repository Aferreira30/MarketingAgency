import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 776px;
margin: 0 auto;
margin-bottom: 185px;
text-transform: capitalize;
display: flex;
align-items: center;
gap: 100px;

    .contTextos{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap:46px;
      width: 505px;
      height: 584px;

      h2{
        width: 274px;
        height: 54px;
        font-size:${({theme})=>theme.fonts.LtSubTitles.size}px;
        line-height: ${({theme})=>theme.fonts.LtSubTitles.lineHeight}px;
        font-weight: ${({theme})=>theme.fonts.LtSubTitles.weight};
      }
      p{
        font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
        font-weight:${({theme})=>theme.fonts.LtParagraph.weight};
        line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
        color:${({theme})=>theme.fonts.LtParagraph.color1};
        text-align: justify;
      }
      img{
        margin-top: 46px;
      }
    }
    
    .contWorks{
      .works{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 292px;
        height: 252px;  

          h4{
            font-size: ${({theme})=>theme.fonts.LtDrescription.size}px;
            line-height: ${({theme})=>theme.fonts.LtDrescription.lineHeight}px;
            font-weight:${({theme})=>theme.fonts.LtDrescription.weight};
          }
          p{
            font-size:${({theme})=>theme.fonts.LtParagraphFraca.size}px ;
            line-height: ${({theme})=>theme.fonts.LtParagraphFraca.lineHeight}px ;
            font-weight: ${({theme})=>theme.fonts.LtParagraphFraca.weight};
            color:${({theme})=>theme.fonts.LtParagraphFraca.color} ;
          }
      }
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 80px;
    }

`;