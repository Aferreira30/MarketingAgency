import {Container} from "./style";

import pessoa from "../../../../img/fotos/team/pessoa1.svg";
import pessoa2 from "../../../../img/fotos/team/pessoa2.svg";
import pessoa3 from "../../../../img/fotos/team/pessoa3.svg";
import pessoa4 from "../../../../img/fotos/team/pessoa4.svg";
import pessoa5 from "../../../../img/fotos/team/pessoa5.svg";
import pessoa6 from "../../../../img/fotos/team/pessoa6.svg";


export default function Ourteam(){
  return(
    <Container>
        <div className="contOTeam">
            <div className="contImgs">
                <img src={pessoa} alt="Pessoa" width={191} height={191} />
                <img src={pessoa2} alt="Pessoa" width={191} height={191} />
                <img src={pessoa3} alt="Pessoa" width={191} height={191} />
                <img src={pessoa4} alt="Pessoa" width={191} height={191} />
                <img src={pessoa5} alt="Pessoa" width={191} height={191} />
                <img src={pessoa6} alt="Pessoa" width={191} height={191} />
            </div>
            <div className="contTextos">
              <h2>Meet Our Team</h2>\
              <h3>Use this section to describe your company and the </h3>
              <p>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
              <button type="button">Learn More</button>
            </div>
        </div>
    </Container>
  )
}