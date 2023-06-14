import { Container ,MenuList} from "./style";

import logo from "../../../../img/logos/logotipoAgenciaPqn.svg";
import instagram from "../../../../img/redesSociais/instagram.svg";
import twitter from "../../../../img/redesSociais/twitter.svg";
import facebook from "../../../../img/redesSociais/facebook.svg";

const Links = [
  {
    link:"Work With Us",
    id:"#HowItWorks"

  },  
  {
    link:"Advertise With Us"
  },
  {
    link:"Support Us"
  },  
  {
    link:"Business Advices"
  },
  {
    link:"Private Coaching"
  },  
  {
    link:"Our Work",
    id:"#OurWork"
  },
  {
    link:"Our Commitment"
  },  
  {
    link:"Our Team"
  },
  {
    link:"About Us",
    id:"#AboutUs"
  },  
  {
    link:"Report a Bug"
  },
  {
    link:"Work With Us"
  }
]

export default function Bottom(){
  return(
    <Container>
      <div className="contPart1">
        <img src={logo} alt="Logo"  width={186.32} height={42}/>
        <p>Los Angeles, California, USA</p>
            <div className="redesSocias">
              <img src={instagram} alt="Instagram" />
              <img src={twitter} alt="Twitter" />
              <img src={facebook} alt="Facebook " />
            </div>
            <button type="bottom">Contact Us</button>
      </div>
        <MenuList>
        {
          Links.map(
            (links)=>{
              const {link,id} = links;
              return(
                <li >
                  <a href={id}>{link}</a>
                </li>
              )
            }
          )
        }
        </MenuList>
    </Container>
  )
}