import { Container } from './style';

import Commitments from './commitments';
import Companies from './companies';
import Works from './works';
import OurWork from './OurWork';
import Ourteam from './OurTeam';
import Comentarios from './testimonial';
import Help from './help';
import Banner from './banner'
import Bottom from './bottom';


export default function Section() {
  return (

    <Container>
      <Companies />
      <Commitments />
      <Works />
      <OurWork />
      <Ourteam />
      <Comentarios />
      <Banner />
      <Help />
      <Bottom />
    </Container>

  );
}
