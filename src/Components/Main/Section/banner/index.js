import { Container } from "./style";

import balao from "../../../../img/balaoBanner.svg";

export default function Banner(){
return(
  <Container>
  <div className="banner">
    <div className="contBanner">
      <div className="contBtn">
        <h1>start your journey with us now</h1>
        <button type="button">Start Now</button>
      </div>
      <div className="contImgBanner">
        <img src={balao} alt="balao" />
      </div>
    </div>
  </div>
  </Container>
)
}