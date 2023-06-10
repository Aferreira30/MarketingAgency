import { Container } from "./style";

import marca from "../../../../img/fotos/marcas/spotify.svg";
import marca2 from "../../../../img/fotos/marcas/google.svg";
import marca3 from "../../../../img/fotos/marcas/uber.svg";
import marca4 from "../../../../img/fotos/marcas/microsoft.svg";
import marca5 from "../../../../img/fotos/marcas/shopify.svg";
import marca6 from "../../../../img/fotos/marcas/evernote.svg";
import marca7 from "../../../../img/fotos/marcas/adobe.svg";
import marca8 from "../../../../img/fotos/marcas/asana.svg";
import marca9 from "../../../../img/fotos/marcas/paypal.svg";
import marca10 from "../../../../img/fotos/marcas/amazon.svg";



export default function Companies(){
  return(
    <Container>
      <div className="contTextos">
            <h2>Companies <br /> we Work with</h2>
            <p>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
      </div>

      <div className="contPatrocinios">
        <img src={marca} alt="Spotify" />
        <img src={marca2} alt="google" />
        <img src={marca3} alt="uber" />
        <img src={marca4} alt="microsoft" />
        <img src={marca5} alt="shopify" />

        <img src={marca6} alt="evernote" />
        <img src={marca7} alt="adobe" />
        <img src={marca9} alt="paypal" />
        <img src={marca10} alt="amazon" />
        <img src={marca8} alt="asana" />
      </div>
    </Container>
  )
}