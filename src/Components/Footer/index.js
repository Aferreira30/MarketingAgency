import { Container,FooterList } from "./style";

export default function Footer(){
  return(
    <Container>
      <div className="contFooter">
        <h2>© 2022 Embrace, Inc. - All Rights Reserved</h2>
          <FooterList>
            <li>Terms of use  </li>
            <li>Privacy policy </li>
          </FooterList>
      </div>
    </Container>
  )
}