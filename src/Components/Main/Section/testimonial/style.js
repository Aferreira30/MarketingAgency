import styled from "styled-components";

export const Container = styled.article`
width:100%;
height: 600px;
margin: 0 auto;

.contTextoButtons{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  .contTextos1{
    width: 609px;
    height: 95px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

        h1{
          font-size: ${({theme})=>theme.fonts.LtSubTitles.size}px;
          line-height: ${({theme})=>theme.fonts.LtSubTitles.lineHeight}px;
          font-weight:  ${({theme})=>theme.fonts.LtSubTitles.weight};
        }
        p{     
          font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
          line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
          font-weight:  ${({theme})=>theme.fonts.LtParagraph.weight};}
  }
  .buttons{
    display: flex;
    gap: 20px;
    button{
      border: none;
      background: ${({theme})=>theme.colors.button};
      width: 85px;
      height: 85px;
      border-radius: 50%;
    }
    button:first-child img{
      transform: rotate(180deg);
    }
  }
}
#contSlider{
  width: 100%;
  height: 100%;

  .sliderPoint{
    width: 100%;
    height: 296px;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    
    .contInfoSlider{
      width:505px;
      height: 296px;
        background-color: ${({theme})=>theme.colors.bgSlider};
        border-radius: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: flex-start;
        gap: 19px;
        padding: 32px 73px 32px 32px;
        .contTextosSlider{
            margin-left:-100px ;
          h4{
            width: 100%;
            font-size: ${({theme})=>theme.fonts.LtDrescription.size}px;
            line-height:${({theme})=>theme.fonts.LtDrescription.lineHeight}px;
            font-weight:${({theme})=>theme.fonts.LtDrescription.weight};          
          }
          span{
            font-size: ${({theme})=>theme.fonts.LtDrescription.size3}px;
            line-height:${({theme})=>theme.fonts.LtDrescription.lineHeight3}px;
            font-weight:${({theme})=>theme.fonts.LtDrescription.weight};      
          }
        }
        p{
          width: 400px;
          height: 128px;
          text-align: left;
          font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
          line-height:${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
          font-weight:${({theme})=>theme.fonts.LtParagraph.weight};    
          grid-column: span 2;
        }
      }
      .contInfoSlider:first-child{
        background-color: ${({theme})=>theme.colors.button};
        color: #FFF;
      }
  }
  .sliderPoint::-webkit-scrollbar{
    display: none;
  }
}
`;