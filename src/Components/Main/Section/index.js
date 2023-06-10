import { Container } from './style';

import Commitments from './commitments';
import Companies from './companies';
import Works from './works';
import OurWork from './OurWork';
import Ourteam from './OurTeam';


export default function Section() {
  return (
    <Container>
      <Companies />
      <Commitments />
      <Works />
      <OurWork />
      <Ourteam />
    </Container>
  );
}
