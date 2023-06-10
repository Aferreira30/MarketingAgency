import { Container } from "./style";

import cocacola from "../../../../img/fotos/materiais/cocacola.svg";
import tenis from "../../../../img/fotos/materiais/tenis.svg";
import notebook from "../../../../img/fotos/materiais/notebook.svg";

import Aside from "./Aside";


export default function OurWork(){
  return(
      <Container id="OurWork">
          <h1>Our Work</h1>
          <p id="subTitle">Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
          <div className="contImgs">
            <div className="contImgTexto">
              <img src={notebook} alt="Notebook"  width={400} height={324}/>
              <h4>Apple</h4>
              <p>Use this section to describe your </p>
            </div>
            <div className="contImgTexto">
              <img src={cocacola} alt="Coca-Cola"  width={400} height={324}/>
              <h4>Coca-Cola</h4>
              <p>Use this section to describe your </p>
            </div>
            <div className="contImgTexto">
              <img src={tenis} alt="Tenis Nike"  width={400} height={324}/>
              <h4>Nike</h4>
              <p>Use this section to describe your </p>
            </div>
          </div>
          <button type="button">See More</button>
          <Aside />
      </Container>
  )
}