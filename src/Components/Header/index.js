import { ContHeader,Menu } from "./style";

import logo from "../../img/logos/logotipoAgencia.svg";

export default function Header(){
  return(
    <ContHeader>
      <div className="contLogoMenu">
          <img src={logo} alt="Logotipo" />
            <Menu>
              <li><a href="#HowItWorks">How it Works</a></li>
              <li><a href="#OurWork">Our Work</a></li>
              <li><a href="#Pricing">Pricing</a></li>
              <li><a href="#AboutUs">About Us</a></li>
            </Menu>
      </div>
         <button type="button">Try it Now</button>
    </ContHeader>
  )
}