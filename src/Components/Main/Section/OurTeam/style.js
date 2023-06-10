import styled from "styled-components";

export const Container = styled.article`
width: 100%;
height: 636px;
margin: 0 auto;
margin-top: 120px;
text-transform: capitalize;

    .contOTeam{
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
     

      .contImgs{
        height: 399px;
        width:612px;
        display: grid;
        grid-template-columns: repeat(3,191px);
        grid-template-rows: repeat(2,191px);
        gap: 17px;
      }
      .contTextos{
        width: 507px;
        height: 399px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        padding-bottom: 130px;
            h2{
              width: 315px;
              height: 54px;
              font-size:${({theme})=>theme.fonts.LtSubTitles.size}px;
              line-height:${({theme})=>theme.fonts.LtSubTitles.lineHeight}px;
              font-weight: ${({theme})=>theme.fonts.LtSubTitles.weight};
              margin-bottom: -50px;
            }
            h3{
              width: 498px;
              height: 80px;
              font-size:${({theme})=>theme.fonts.LtSubTitleFraca.size}px;
              line-height:${({theme})=>theme.fonts.LtSubTitleFraca.lineHeight}px;
              font-weight: ${({theme})=>theme.fonts.LtSubTitleFraca.weight};
              margin-bottom: 16px;
              color: rgba(0, 0, 0, 0.6);
            }
            p{
              font-size:${({theme})=>theme.fonts.LtParagraph.size}px;
              line-height:${({theme})=>theme.fonts.LtParagraph.lineHeight}px;
              font-weight: ${({theme})=>theme.fonts.LtParagraph.weight};
              width: 507px;
              height: 96px;
              text-align:left;
            }
            button{
              font-size: ${({theme})=>theme.fonts.LtDrescription.size2}px;
              line-height: ${({theme})=>theme.fonts.LtDrescription.lineHeight2}px;
              font-weight: ${({theme})=>theme.fonts.LtDrescription.weight};
              text-align: center;
              color: ${({theme})=>theme.fonts.LtDrescription.color1};
              background: ${({theme})=>theme.fonts.LtDrescription.color2} ;
              border-radius: 64px;
              width: 223px;
              height: 64px;
              padding: 16px 48px;
              border: none;
            }
      }
    }
`;