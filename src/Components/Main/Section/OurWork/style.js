import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 1172px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap:48px;

h1{
  font-size: ${({theme})=>theme.fonts.LtSubTitles.size}px;
  line-height: ${({theme})=>theme.fonts.LtSubTitles.lineHeight}px;
  font-weight: ${({theme})=>theme.fonts.LtSubTitles.weight};
  text-align: center;
}
#subTitle{
  font-size: ${({theme})=>theme.fonts.LtParagraph.size}px;
  line-height: ${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
  font-weight: ${({theme})=>theme.fonts.LtParagraph.weight};
  text-align: center;
  color: ${({theme})=>theme.fonts.LtParagraph.color1};
  width:756px;
  align-self: center;
}
  .contImgs{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
      .contImgTexto{
            h4{
              font-size: ${({theme})=>theme.fonts.LtDrescription.size}px;
              line-height: ${({theme})=>theme.fonts.LtDrescription.lineHeight}px;
              font-weight: ${({theme})=>theme.fonts.LtDrescription.weight};
              text-align: center;
                  }
            p{
                    font-size: ${({theme})=>theme.fonts.LtParagraphFraca.size}px;
                    line-height: ${({theme})=>theme.fonts.LtParagraphFraca.lineHeight}px;
                    font-weight: ${({theme})=>theme.fonts.LtParagraphFraca.weight};
                    text-align: center;
                    color: ${({theme})=>theme.fonts.LtParagraphFraca.color};
                  }
      }
  }
  button{
    font-size: ${({theme})=>theme.fonts.LtDrescription.size2}px;
    line-height: ${({theme})=>theme.fonts.LtDrescription.lineHeight2}px;
    font-weight: ${({theme})=>theme.fonts.LtDrescription.weight};
    text-align: center;
    color: ${({theme})=>theme.fonts.LtDrescription.color1};
    background: ${({theme})=>theme.fonts.LtDrescription.color2} ;
    border-radius: 64px;
    width: 203px;
    height: 64px;
    padding: 16px 48px;
    border: none;
    align-self: center;
  }
`;