import styled from "styled-components";

import lapis from "../../img/fotos/emojis/emojiLapis.svg";
import mulhernopc from "../../img/fotos/emojis/emojiPc.svg";
import coroa from "../../img/fotos/emojis/coroa.svg";
import blPretoDr from "../../img/fotos/balaoPretoMao.svg";
import blPretoEq from "../../img/fotos/balaoPretoEmoji.svg";
import mao from "../../img/fotos/emojis/emojiMao.svg";
import coracao from "../../img/fotos/emojis/emojiRosto.svg";


export const Container = styled.main`
  width:100%;
  height:800px;
  margin:0 auto;
       .contMain{
       margin-top: 120px;
       margin-bottom: 130px;
        display: flex;
        align-items: center;
        gap: 134px;
      }
        .contTextos{
          margin-top:114px;
          display:flex;
          flex-direction:column;
          gap:24px;
          justify-content:center;

              h1{
                width: 498px;
                height: 360px;
                text-transform: capitalize;
                font-size:${({theme})=>theme.fonts.LtTitle1.size}px;
                line-height: ${({theme})=>theme.fonts.LtTitle1.lineHeight}px;
                font-weight: ${({theme})=>theme.fonts.LtTitle1.weight};
              }
              p{
                width: 413px;
                height: 96px;
                color:${({theme})=>theme.fonts.LtParagraphFraca.color};
                font-size:${({theme})=>theme.fonts.LtParagraphFraca.size}px;
                line-height: ${({theme})=>theme.fonts.LtParagraphFraca.lineHeight2}px;
                font-weight: ${({theme})=>theme.fonts.LtParagraphFraca.weight};
              }
        }
        .contImg{
          position: relative;
          display:grid;
          grid-template-columns: 370px 243px;

            .contPessoa2{
              position: relative;
            }
            .contPessoa2::after{
              content: url(${coracao});
              position: absolute;
              top: -55px;
              left: -50px;
              transform: rotate(-20.88deg);
              z-index: 3;
            }

                #pessoa3{
                    margin-left: -130px ;
                    grid-row: 2;
                }
                .contPessoa3{
                  position: relative;
                }
                .contPessoa3::after{
                  content:url(${mao});
                  position: absolute;
                  bottom: -5px;
                  left: -170px;
                  z-index: 3;
                }

                #pessoa4{
                  grid-row: 3;
                  position: relative;
                }
                .contPessoa4::after{
                  content:url(${blPretoDr});
                  position: absolute;
                  left: 160px;
                  top: 350px;
                  z-index: 2;

                }
                .contPessoa4::before{
                  content: url(${blPretoEq});
                  position: absolute;
                  left: 280px;
                  top:-72px;
                  z-index: 2;
                }

                #balaoAzul{
                  grid-row: 2;
                  position: relative;
                }

                  .contBaloes{
                    display: flex;
                    margin-left: -130px ;
                    position:relative;

                        #balaoAmarelo{
                          grid-row: 3;
                        }
                        #balaoBranco{
                          grid-column: 2;
                          grid-row: 3;
                    }
                  }
                  .contBaloes::after{
                    content: url(${mulhernopc});
                    position: absolute;
                    top:65px;
                    left: 45px;
                    z-index: 1;
                  }
                  .contBaloes::before{
                    content: url(${coroa});
                    position:absolute;
                    top:65px;
                    left: 235px;
                  }
        ;
        }
        .contImg::after{
          content: url(${lapis});
          position: absolute;
          top:290px;
          left:85px;
          z-index: 1;
          transform: matrix(-1, 0, 0, 1, 0, 0);
        }
`;

export const FormEmail = styled.form`
  button{
    width: 114px;
    height: 62px;
    background:${({theme})=>theme.colors.button};
    padding: 20px 24px;
    border-radius: 70px;
    border:none;
    font-size:${({theme})=>theme.fonts.LtMenu.size}px;
    line-height: ${({theme})=>theme.fonts.LtMenu.lineHeight2}px;
    font-weight: ${({theme})=>theme.fonts.LtMenu.weight};
    color:${({theme})=>theme.colors.buttonFont};
  }
  input{
    width: 309px;
    height: 62px;
    padding: 20px 18px;
    background: #FAFAFA;
    border-radius: 37px;
    outline: none;
    appearance:none;
    border:none;
    font-size:${({theme})=>theme.fonts.LtMenu.size}px;
    margin-right:12px;

  }
`;