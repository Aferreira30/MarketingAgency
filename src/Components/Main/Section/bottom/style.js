import styled from "styled-components";
export const Container =styled.div`
width: 100%;
height: 392px;
margin: 0 auto;
margin-top: 90px;
display: flex;
gap: 300px;

      .contPart1{
        display: flex;
        flex-direction: column;
        gap:30px;
        p{
          width: 210px;
          height: 20px;
          font-size:${({theme})=>theme.fonts.LtMenu.size}px ;
          font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
          line-height:${({theme})=>theme.fonts.LtMenu.lineHeight}px;
        }
        button{
          color:${({theme})=>theme.colors.buttonFont};
          background: ${({theme})=>theme.colors.button};
          width: 295px;
          height: 64px;
          border-radius: 69px;
          padding: 16px 48px;
          border: none;
          font-size:${({theme})=>theme.fonts.LtDrescription.size2}px ;
          font-weight: ${({theme})=>theme.fonts.LtDrescription.weight};
          line-height:${({theme})=>theme.fonts.LtDrescription.lineHeight2}px;
          margin-top: 60px;
        }
          .redesSocias{
            display: flex;
            gap:20px;
          }
      }
`;

export const MenuList = styled.ul`
width: 513px;
height: 224px;
list-style: none;
display: grid;
grid-template-columns: repeat(3,200px);
gap: 60px;
li{
  a{
    color: #000;
    text-decoration: none;
    font-size:${({theme})=>theme.fonts.LtMenu.size}px ;
    font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
    line-height:${({theme})=>theme.fonts.LtMenu.lineHeight2}px;
   }
}
`;