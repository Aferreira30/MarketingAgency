import styled from "styled-components";

export const Container = styled.aside`
width: 100%;
height: 552px;
margin: 0 auto;
margin-bottom:150px ;

.contTextos{
width: 729px;
height: 108px;
display: flex;
flex-direction: row;
align-items: center;
gap: 36px;

      h2{
        width: 280px;
        height: 108px;
        text-transform: capitalize;
        font-size: ${({theme})=>theme.fonts.LtSubTitles.size}px;
        font-weight: ${({theme})=>theme.fonts.LtSubTitles.weight};
        line-height: ${({theme})=>theme.fonts.LtSubTitles.lineHeight}px;
      }
      p{
        width:413px;
        height: 84px;
        font-size: ${({theme})=>theme.fonts.LtParagraphFraca.size}px;
        font-weight: ${({theme})=>theme.fonts.LtParagraphFraca.weight};
        line-height: ${({theme})=>theme.fonts.LtParagraphFraca.lineHeight3}px;
      }
}

.contPatrocinios{
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  display:grid;
  grid-template-columns: repeat(5,1fr);
  gap:96px ;

  img{
    margin-right: 30px;
  }
}
`;