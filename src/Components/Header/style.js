import styled from "styled-components"

export const ContHeader = styled.header`
width:1240px;
height: 88px;
margin: 0 auto;
display:flex;
align-items:center;
justify-content:space-between;
a{
  text-decoration: none;
  color: #000;
}
a:hover{
  color: #3461ff;
  transition: 0.2s all;
}
        .contLogoMenu{
          display:flex;
          align-items:center;
          gap:88px;
        }
     button{
      width: 123px;
      height: 52px;
      background:${({theme})=>theme.colors.button};
      color:${({theme})=>theme.colors.buttonFont};
      border-radius: 70px;
      text-transform: capitalize;
      font-size:${({theme})=>theme.fonts.LtMenu.size}px;
      line-height: ${({theme})=>theme.fonts.LtMenu.lineHeight2}px;
      font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
      border:none;

     }   
`;

export const Menu = styled.ul`
width:410px;
height:22px;
display:flex;
align-items:center;
justify-content:space-evenly;
gap:40px;
      li{
        height:22px;
        list-style:none;
        font-size:${({theme})=>theme.fonts.LtMenu.size}px;
        line-height: ${({theme})=>theme.fonts.LtMenu.lineHeight}px;
        font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
      }
`;