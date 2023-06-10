import { Container } from "./style";

import city from "../../../../img/fotos/materiais/city.svg";
import xicara from "../../../../img/fotos/materiais/xicara.svg";
import moeda from "../../../../img/fotos/materiais/moeda.svg";
import setaCima from "../../../../img/fotos/materiais/setaCima.svg";
import raio from "../../../../img/fotos/materiais/raio.svg";


export default function Works(){
  return(
  <Container id="HowItWorks">
    <div className="contTextos">
      <h2>how it Works</h2>
      <p>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
      <img src={city} alt="City"  width={505} height={376}/>
    </div>
    <div className="contWorks">
      <div className="works">
        <img src={xicara} alt="Xicara"  width={102} height={102}/>
        <h4>Ideation</h4>
        <p>Use this section to describe your company and the products you offer. You could share your company’s</p>
      </div>
      <div className="works">
        <img src={moeda} alt="moeda"  width={102} height={102}/>
        <h4>Budget</h4>
        <p>Use this section to describe your company and the products you offer. You could share your company’s</p>
      </div>
      <div className="works">
        <img src={setaCima} alt="setaCima"  width={102} height={102}/>
        <h4>Perfomance</h4>
        <p>Use this section to describe your company and the products you offer. You could share your company’s</p>
      </div>
      <div className="works">
        <img src={raio} alt="raio"  width={102} height={102}/>
        <h4>Speed</h4>
        <p>Use this section to describe your company and the products you offer. You could share your company’s</p>
      </div>

    </div>
  </Container>
  )
}