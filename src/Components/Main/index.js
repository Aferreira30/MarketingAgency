import { Container, FormEmail } from './style';

import pessoa from '../../img/fotos/mulher1.svg';
import pessoa2 from '../../img/fotos/mulher2.svg';
import pessoa3 from '../../img/fotos/mulher3.svg';
import pessoa4 from '../../img/fotos/homem.svg';
import balaoazul from '../../img/fotos/balaoAzul.svg';
import balaoAmarelo from '../../img/fotos/balaoAmarelo.svg';
import balaoBranco from '../../img/fotos/balaoBranco.svg';

import Section from './Section';

export default function MainPage() {
  return (
    <Container>
      <div className="contMain">
        <div className="contTextos">
          <h1>We Take Care of Your Brand</h1>
          <p>
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.{' '}
          </p>
          <FormEmail>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
            <button type="submit">Lets Talk</button>
          </FormEmail>
        </div>
        <div className="contImg">
          <img src={pessoa} alt="mulher" id="pessoa" />
          <div className="contPessoa2">
            <img src={pessoa2} alt="mulher" id="pessoa2" />
          </div>
          <img src={balaoazul} alt="balao" id="balaoAzul" />
          <div className="contPessoa3">
            <img src={pessoa3} alt="mulher" id="pessoa3" />
          </div>
          <div className="contPessoa4">
            <img src={pessoa4} alt="mulher" id="pessoa4" />
          </div>
          <div className="contBaloes">
            <img src={balaoAmarelo} alt="balao" id="balaoAmarelo" />
            <img src={balaoBranco} alt="balao" id="balaoBranco" />
          </div>
        </div>
      </div>
      <Section />
    </Container>
  );
}
