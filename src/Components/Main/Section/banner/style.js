import styled from "styled-components";

import seta from "../../../../img/setaTorta.svg";
import raio from "../../../../img/raioAzul.svg";

export const Container = styled.aside`
width: 100%;
height: 628px;
margin: 0 auto;

.banner{
width: 100%;
height: 455px;
background: #232038;
border-radius: 56px;


.contBanner{
  width: 80%;
  height: 352px;
  padding-top: 82px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  text-transform:capitalize;
  .contBtn{
    display: flex;
    flex-direction: column;
    gap: 100px;
    h1{
      width: 469px;
        height: 126px;
      font-size:${({theme})=>theme.fonts.LtSubTitleForte.size2}px;
      color:${({theme})=>theme.fonts.LtSubTitleForte.color};
      font-weight:${({theme})=>theme.fonts.LtSubTitleForte.weight};
      line-height: ${({theme})=>theme.fonts.LtSubTitleForte.lineHeight}px;
    }
    button{
      width: 210px;
      height: 64px;
      padding:16px 48px ;
      font-size:${({theme})=>theme.fonts.LtDrescription.size2}px;
      color:${({theme})=>theme.fonts.LtSubTitleForte.color};
      font-weight:${({theme})=>theme.fonts.LtDrescription.weight};
      line-height: ${({theme})=>theme.fonts.LtDrescription.lineHeight2}px;
      background: ${({theme})=>theme.colors.button};
      border-radius: 69px;
      border:none;
    }
  }
  .contImgBanner{
    position: relative;
  }
  .contImgBanner::after{
    content: url(${raio});
    position: absolute;
    top: 38.31%;
    left: 20.04%;
    z-index: 1;
  }
  .contImgBanner::before{
    content: url(${seta});
    position: absolute;
    top: 38.31%;
    left: 42.04%;
    z-index: 1;
  }
  }
}

`;